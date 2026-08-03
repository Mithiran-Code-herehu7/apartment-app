-- =============================================================================
-- FILE: 05_admin_moderation.sql
-- PURPOSE: Admin actions audit log, disputes, and complaint tracking.
--          Everything admins do is recorded immutably for trust & accountability.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- ADMIN_ACTIONS  (Audit Log)
-- Append-only log of every meaningful admin decision.
-- Never updated or deleted — this is the authoritative audit trail.
-- The target_type + target_id pattern allows a single table to reference
-- any entity (user, listing, booking, dispute) without N foreign keys.
-- ---------------------------------------------------------------------------
CREATE TABLE admin_actions (
    id              UUID                PRIMARY KEY DEFAULT gen_random_uuid(),
    admin_id        UUID                NOT NULL REFERENCES users(id),
    action_type     admin_action_type   NOT NULL,

    -- Polymorphic target (what was acted upon)
    target_type     TEXT                NOT NULL,   -- 'user' | 'listing' | 'booking' | 'dispute' | 'payout' | 'invite'
    target_id       UUID                NOT NULL,

    -- Human-readable description and structured diff
    notes           TEXT,
    metadata        JSONB,              -- e.g. {"old_status": "pending", "new_status": "verified"}

    -- Apartment context (useful for multi-apartment admins)
    apartment_id    UUID                REFERENCES apartments(id),

    created_at      TIMESTAMPTZ         NOT NULL DEFAULT NOW()
    -- NO updated_at — this table is append-only
);

CREATE INDEX idx_admin_actions_admin        ON admin_actions(admin_id);
CREATE INDEX idx_admin_actions_target       ON admin_actions(target_type, target_id);
CREATE INDEX idx_admin_actions_type         ON admin_actions(action_type);
CREATE INDEX idx_admin_actions_apartment    ON admin_actions(apartment_id);
CREATE INDEX idx_admin_actions_created      ON admin_actions(created_at DESC);

-- Admin moderation queue: pending users
CREATE INDEX idx_admin_actions_type_recent  ON admin_actions(action_type, created_at DESC);

COMMENT ON TABLE admin_actions IS
    'Immutable, append-only audit log of all admin decisions.
     Uses a polymorphic target_type + target_id so one table covers
     all entity types. Never UPDATE or DELETE rows here.';

-- ---------------------------------------------------------------------------
-- DISPUTES
-- A learner or provider raises a dispute against a booking.
-- Admin investigates and records the resolution.
-- Links to the booking, the filing party, and the accused party.
-- ---------------------------------------------------------------------------
CREATE TABLE disputes (
    id                  UUID                PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id          UUID                NOT NULL REFERENCES bookings(id),
    filed_by            UUID                NOT NULL REFERENCES users(id),    -- Who raised the dispute
    against_user_id     UUID                NOT NULL REFERENCES users(id),    -- Who is accused
    apartment_id        UUID                NOT NULL REFERENCES apartments(id),

    subject             TEXT                NOT NULL,
    description         TEXT                NOT NULL,
    evidence_urls       TEXT[],             -- Links to screenshots / files uploaded by filer

    status              dispute_status      NOT NULL DEFAULT 'open',
    assigned_to         UUID                REFERENCES users(id),              -- Admin handling it
    resolution          dispute_resolution,
    resolution_notes    TEXT,
    resolved_at         TIMESTAMPTZ,

    created_at          TIMESTAMPTZ         NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ         NOT NULL DEFAULT NOW(),

    CONSTRAINT dispute_self_check CHECK (filed_by != against_user_id)
);

CREATE INDEX idx_disputes_booking       ON disputes(booking_id);
CREATE INDEX idx_disputes_filed_by      ON disputes(filed_by);
CREATE INDEX idx_disputes_against       ON disputes(against_user_id);
CREATE INDEX idx_disputes_status        ON disputes(status);
CREATE INDEX idx_disputes_assigned      ON disputes(assigned_to);
CREATE INDEX idx_disputes_apartment     ON disputes(apartment_id);
-- Admin open queue
CREATE INDEX idx_disputes_open_queue    ON disputes(apartment_id, status, created_at)
    WHERE status IN ('open', 'under_review');

COMMENT ON TABLE disputes IS
    'Formal dispute records raised by learners or providers against a booking.
     Admin investigates, assigns a resolution, and the outcome is logged
     in admin_actions for full audit trail.';

-- ---------------------------------------------------------------------------
-- DISPUTE_MESSAGES
-- Admin ↔ parties communication thread within a dispute.
-- Separate from booking messages to keep moderation context clean.
-- ---------------------------------------------------------------------------
CREATE TABLE dispute_messages (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    dispute_id  UUID        NOT NULL REFERENCES disputes(id) ON DELETE CASCADE,
    sender_id   UUID        NOT NULL REFERENCES users(id),
    body        TEXT        NOT NULL CHECK (char_length(body) > 0),
    is_internal BOOLEAN     NOT NULL DEFAULT FALSE,  -- TRUE = admin-only note, not visible to parties
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_dispute_messages_dispute ON dispute_messages(dispute_id);
CREATE INDEX idx_dispute_messages_sender  ON dispute_messages(sender_id);

COMMENT ON TABLE dispute_messages IS
    'Communication log within a dispute. is_internal = TRUE messages are
     admin-only notes and never exposed to the learner or provider.';
