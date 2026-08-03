-- =============================================================================
-- FILE: 06_notifications.sql
-- PURPOSE: Notification schema for in-app, email, SMS, and push channels.
--          Schema-only at MVP — delivery is handled by the application layer.
--          Keeping it in the DB enables full notification history and retry logic.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- NOTIFICATION_TEMPLATES  (optional, for future use)
-- Pre-defined templates keyed by event name.
-- At MVP you can skip this and use hardcoded templates in the app.
-- ---------------------------------------------------------------------------
CREATE TABLE notification_templates (
    id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    event_key       TEXT        NOT NULL UNIQUE,   -- e.g. 'booking.confirmed', 'listing.approved'
    channel         notification_channel NOT NULL,
    subject         TEXT,                          -- Email subject / push title
    body_template   TEXT        NOT NULL,          -- Handlebars / Jinja2 template string
    is_active       BOOLEAN     NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE notification_templates IS
    'Centralised message templates keyed by event name and channel.
     Body templates use {{variable}} placeholders substituted at send time.';

-- ---------------------------------------------------------------------------
-- NOTIFICATIONS
-- One row per notification delivery attempt per user per channel.
-- The event_key + reference_type + reference_id allow the app to
-- deduplicate (don't send the same booking confirmation twice).
-- ---------------------------------------------------------------------------
CREATE TABLE notifications (
    id              UUID                    PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID                    NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    apartment_id    UUID                    REFERENCES apartments(id),

    channel         notification_channel    NOT NULL DEFAULT 'in_app',
    status          notification_status     NOT NULL DEFAULT 'pending',

    event_key       TEXT                    NOT NULL,  -- mirrors notification_templates.event_key
    title           TEXT,
    body            TEXT                    NOT NULL,

    -- Polymorphic reference to what triggered this notification
    reference_type  TEXT,   -- 'booking' | 'listing' | 'dispute' | 'payment' | 'invite'
    reference_id    UUID,

    -- Delivery tracking
    sent_at         TIMESTAMPTZ,
    read_at         TIMESTAMPTZ,
    failed_reason   TEXT,
    retry_count     SMALLINT    NOT NULL DEFAULT 0,

    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_notifications_user         ON notifications(user_id);
CREATE INDEX idx_notifications_status       ON notifications(status);
CREATE INDEX idx_notifications_user_unread  ON notifications(user_id, read_at)
    WHERE read_at IS NULL AND status = 'sent';
CREATE INDEX idx_notifications_reference    ON notifications(reference_type, reference_id);
CREATE INDEX idx_notifications_retry        ON notifications(status, retry_count)
    WHERE status = 'failed' AND retry_count < 3;

COMMENT ON TABLE notifications IS
    'Per-user notification delivery records. Supports in-app, email, SMS, and push.
     reference_type + reference_id link the notification to its source entity.
     Failed notifications can be retried by the background worker using the retry index.';
