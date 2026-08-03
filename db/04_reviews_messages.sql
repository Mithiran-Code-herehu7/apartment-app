-- =============================================================================
-- FILE: 04_reviews_messages.sql
-- PURPOSE: Reviews (post-booking) and booking-scoped chat messages.
--          Reviews are gated behind completed bookings to ensure authenticity.
--          Messages are scoped per booking for focused communication.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- REVIEWS
-- A learner can review a listing/provider after a booking is marked 'completed'.
-- One review allowed per booking (enforced by unique constraint).
-- Optionally a provider can review the learner (future use — target = 'learner').
-- ---------------------------------------------------------------------------
CREATE TABLE reviews (
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id      UUID            NOT NULL REFERENCES bookings(id),
    reviewer_id     UUID            NOT NULL REFERENCES users(id),    -- Who wrote the review
    reviewee_id     UUID            NOT NULL REFERENCES users(id),    -- Who is being reviewed
    listing_id      UUID            NOT NULL REFERENCES listings(id), -- Denormalised for easy listing-level aggregation
    target          review_target   NOT NULL DEFAULT 'listing',

    rating          SMALLINT        NOT NULL CHECK (rating BETWEEN 1 AND 5),
    title           TEXT,
    body            TEXT,
    is_anonymous    BOOLEAN         NOT NULL DEFAULT FALSE,            -- Hide reviewer name publicly
    is_visible      BOOLEAN         NOT NULL DEFAULT TRUE,             -- Admin can hide problematic reviews
    hidden_reason   TEXT,                                              -- Why admin hid this review

    -- Provider response to a learner review
    provider_reply  TEXT,
    replied_at      TIMESTAMPTZ,

    deleted_at      TIMESTAMPTZ,                                       -- Soft delete
    created_at      TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    -- One review per booking per target type
    CONSTRAINT uq_review_booking_target UNIQUE (booking_id, reviewer_id, target),
    -- Reviewer and reviewee must differ
    CONSTRAINT review_self_review CHECK (reviewer_id != reviewee_id)
);

CREATE INDEX idx_reviews_booking    ON reviews(booking_id);
CREATE INDEX idx_reviews_listing    ON reviews(listing_id);
CREATE INDEX idx_reviews_reviewer   ON reviews(reviewer_id);
CREATE INDEX idx_reviews_reviewee   ON reviews(reviewee_id);
CREATE INDEX idx_reviews_visible    ON reviews(listing_id, is_visible)
    WHERE deleted_at IS NULL AND is_visible = TRUE;
CREATE INDEX idx_reviews_rating     ON reviews(listing_id, rating)
    WHERE deleted_at IS NULL;

COMMENT ON TABLE reviews IS
    'Post-booking ratings and text reviews. Gated to completed bookings only
     (enforced in application logic + the unique constraint on booking_id).
     The unique constraint on (booking_id, reviewer_id, target) prevents
     duplicate reviews per booking. Admin can soft-hide inappropriate reviews.';

-- ---------------------------------------------------------------------------
-- MESSAGES
-- Lightweight per-booking chat between learner and provider.
-- Scoped to a booking so context is never lost.
-- Not a general DM system — purpose-built for booking coordination.
-- ---------------------------------------------------------------------------
CREATE TABLE messages (
    id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    booking_id      UUID        NOT NULL REFERENCES bookings(id) ON DELETE CASCADE,
    sender_id       UUID        NOT NULL REFERENCES users(id),
    recipient_id    UUID        NOT NULL REFERENCES users(id),

    body            TEXT        NOT NULL CHECK (char_length(body) > 0),
    is_read         BOOLEAN     NOT NULL DEFAULT FALSE,
    read_at         TIMESTAMPTZ,

    -- Soft delete: user can "unsend" within a short window in the app
    deleted_at      TIMESTAMPTZ,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT message_self_send CHECK (sender_id != recipient_id)
);

CREATE INDEX idx_messages_booking   ON messages(booking_id);
CREATE INDEX idx_messages_sender    ON messages(sender_id);
CREATE INDEX idx_messages_recipient ON messages(recipient_id);
-- Unread inbox query
CREATE INDEX idx_messages_unread    ON messages(recipient_id, is_read)
    WHERE is_read = FALSE AND deleted_at IS NULL;

COMMENT ON TABLE messages IS
    'Booking-scoped chat between learner and provider.
     Not a general messaging system — strictly tied to a booking for
     traceability and dispute handling. Admin can read threads during disputes.';
