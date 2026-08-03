-- =============================================================================
-- FILE: 03_bookings_payments.sql
-- PURPOSE: Bookings, payments, and payout tracking.
--          Bookings connect learners to a specific listing slot + pricing plan.
--          Payments track the money flow; payouts track settlement to providers.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- BOOKINGS
-- The central transactional record of a learner enrolling in a session.
-- References: learner (user), listing, slot, and pricing plan chosen.
-- Soft-deleted to preserve financial and review history.
-- ---------------------------------------------------------------------------
CREATE TABLE bookings (
    id                  UUID                PRIMARY KEY DEFAULT gen_random_uuid(),
    learner_id          UUID                NOT NULL REFERENCES users(id),
    listing_id          UUID                NOT NULL REFERENCES listings(id),
    slot_id             UUID                NOT NULL REFERENCES availability_slots(id),
    pricing_plan_id     UUID                NOT NULL REFERENCES pricing_plans(id),
    provider_id         UUID                NOT NULL REFERENCES users(id),   -- Denormalized for fast lookups

    status              booking_status      NOT NULL DEFAULT 'pending',

    -- Session window (copied from slot at booking time; slot may later change)
    session_start       TIMESTAMPTZ         NOT NULL,
    session_end         TIMESTAMPTZ         NOT NULL,

    -- Cancellation tracking
    cancelled_at        TIMESTAMPTZ,
    cancellation_party  cancellation_party,
    cancellation_reason TEXT,

    -- Provider / learner notes
    learner_notes       TEXT,                                         -- Special requests from learner
    provider_notes      TEXT,                                         -- Provider note to learner

    -- Soft delete
    deleted_at          TIMESTAMPTZ,

    created_at          TIMESTAMPTZ         NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ         NOT NULL DEFAULT NOW(),

    CONSTRAINT booking_session_order CHECK (session_end > session_start),
    CONSTRAINT booking_cancel_reason  CHECK (
        cancellation_party IS NULL OR cancellation_reason IS NOT NULL
    )
);

-- Core lookup indexes
CREATE INDEX idx_bookings_learner          ON bookings(learner_id);
CREATE INDEX idx_bookings_provider         ON bookings(provider_id);
CREATE INDEX idx_bookings_listing          ON bookings(listing_id);
CREATE INDEX idx_bookings_slot             ON bookings(slot_id);
CREATE INDEX idx_bookings_status           ON bookings(status);
CREATE INDEX idx_bookings_session_start    ON bookings(session_start);
CREATE INDEX idx_bookings_deleted          ON bookings(deleted_at) WHERE deleted_at IS NULL;

-- Provider dashboard: show upcoming confirmed bookings
CREATE INDEX idx_bookings_provider_upcoming ON bookings(provider_id, session_start)
    WHERE status = 'confirmed' AND deleted_at IS NULL;

-- Learner dashboard
CREATE INDEX idx_bookings_learner_status   ON bookings(learner_id, status)
    WHERE deleted_at IS NULL;

-- Admin moderation queue
CREATE INDEX idx_bookings_pending          ON bookings(created_at)
    WHERE status = 'pending' AND deleted_at IS NULL;

COMMENT ON TABLE bookings IS
    'Central transaction record linking a learner to a listing session.
     session_start/end are snapshot-copied from the slot at booking time,
     protecting history even if the slot is later modified.
     Soft-deleted to preserve payment and review audit trails.';

-- ---------------------------------------------------------------------------
-- PAYMENTS
-- One payment record per booking. Tracks gateway interaction, method,
-- amount, and current status through its lifecycle.
-- ---------------------------------------------------------------------------
CREATE TABLE payments (
    id                      UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id              UUID            NOT NULL UNIQUE REFERENCES bookings(id),
    payer_id                UUID            NOT NULL REFERENCES users(id),       -- Learner
    payee_id                UUID            NOT NULL REFERENCES users(id),       -- Provider

    amount                  NUMERIC(10, 2)  NOT NULL CHECK (amount >= 0),
    currency                TEXT            NOT NULL DEFAULT 'INR',
    platform_fee            NUMERIC(10, 2)  NOT NULL DEFAULT 0.00,               -- Platform's cut
    provider_amount         NUMERIC(10, 2)  NOT NULL,                            -- amount - platform_fee
    tax_amount              NUMERIC(10, 2)  NOT NULL DEFAULT 0.00,               -- GST / applicable tax

    payment_method          payment_method  NOT NULL,
    status                  payment_status  NOT NULL DEFAULT 'initiated',

    -- Gateway fields (filled in after gateway interaction)
    gateway_name            TEXT,                                                 -- e.g. 'razorpay', 'stripe'
    gateway_order_id        TEXT,                                                 -- Gateway's order/charge ID
    gateway_payment_id      TEXT,                                                 -- Gateway's payment ID
    gateway_signature       TEXT,                                                 -- Webhook signature for verification
    gateway_raw_response    JSONB,                                                -- Full raw response, for debugging
    gateway_fee             NUMERIC(10, 2),                                       -- Fee charged by gateway

    -- Refund tracking
    refunded_amount         NUMERIC(10, 2)  DEFAULT 0.00,
    refund_reason           TEXT,
    refunded_at             TIMESTAMPTZ,

    -- Timestamps
    initiated_at            TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
    succeeded_at            TIMESTAMPTZ,
    failed_at               TIMESTAMPTZ,
    created_at              TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
    updated_at              TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    CONSTRAINT payment_provider_amount CHECK (
        provider_amount = amount - platform_fee
    ),
    CONSTRAINT payment_refund_max CHECK (
        refunded_amount <= amount
    )
);

CREATE INDEX idx_payments_booking       ON payments(booking_id);
CREATE INDEX idx_payments_payer         ON payments(payer_id);
CREATE INDEX idx_payments_payee         ON payments(payee_id);
CREATE INDEX idx_payments_status        ON payments(status);
CREATE INDEX idx_payments_gateway_order ON payments(gateway_order_id);
CREATE INDEX idx_payments_gateway_pay   ON payments(gateway_payment_id);

-- Admin: find disputed / failed payments quickly
CREATE INDEX idx_payments_disputed      ON payments(created_at)
    WHERE status IN ('disputed', 'failed');

COMMENT ON TABLE payments IS
    'One payment per booking. Captures full gateway lifecycle including
     raw response for debugging. platform_fee and provider_amount are
     computed at payment initiation time and locked in.';

-- ---------------------------------------------------------------------------
-- PAYOUT_TRACKING
-- Tracks settlement of earned funds to providers.
-- Payouts may aggregate multiple completed bookings in a single transfer.
-- Useful for weekly/bi-weekly batch settlement workflows.
-- ---------------------------------------------------------------------------
CREATE TABLE payout_tracking (
    id                  UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_id         UUID            NOT NULL REFERENCES users(id),
    apartment_id        UUID            NOT NULL REFERENCES apartments(id),

    -- Payout window
    period_start        DATE            NOT NULL,
    period_end          DATE            NOT NULL,

    gross_amount        NUMERIC(10, 2)  NOT NULL CHECK (gross_amount >= 0),
    platform_fees_total NUMERIC(10, 2)  NOT NULL DEFAULT 0.00,
    net_amount          NUMERIC(10, 2)  NOT NULL CHECK (net_amount >= 0),  -- What provider actually receives
    currency            TEXT            NOT NULL DEFAULT 'INR',

    status              payout_status   NOT NULL DEFAULT 'pending',

    -- Bank / UPI details (reference only — do NOT store full account numbers here)
    bank_reference      TEXT,                                           -- UTR number or transfer ref
    payout_method       TEXT,                                           -- 'bank_transfer', 'upi', 'manual'
    notes               TEXT,

    processed_by        UUID            REFERENCES users(id),           -- Admin who approved payout
    processed_at        TIMESTAMPTZ,
    created_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    CONSTRAINT payout_period_order CHECK (period_end >= period_start),
    CONSTRAINT payout_net_check    CHECK (net_amount = gross_amount - platform_fees_total)
);

-- Junction: which payments were included in this payout
CREATE TABLE payout_payment_items (
    id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    payout_id       UUID        NOT NULL REFERENCES payout_tracking(id) ON DELETE CASCADE,
    payment_id      UUID        NOT NULL REFERENCES payments(id),
    amount          NUMERIC(10, 2) NOT NULL,

    CONSTRAINT uq_payout_payment UNIQUE (payout_id, payment_id)
);

CREATE INDEX idx_payout_tracking_provider   ON payout_tracking(provider_id);
CREATE INDEX idx_payout_tracking_status     ON payout_tracking(status);
CREATE INDEX idx_payout_tracking_apartment  ON payout_tracking(apartment_id);
CREATE INDEX idx_payout_items_payout        ON payout_payment_items(payout_id);
CREATE INDEX idx_payout_items_payment       ON payout_payment_items(payment_id);

COMMENT ON TABLE payout_tracking IS
    'Aggregate settlement records for paying out providers.
     payout_payment_items links individual payments to a payout batch.
     net_amount is enforced to equal gross - fees via check constraint.';
