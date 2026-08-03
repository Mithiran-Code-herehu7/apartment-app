-- =============================================================================
-- FILE: 02_listings_tables.sql
-- PURPOSE: Categories, listings, media attachments, pricing plans, and
--          availability slots. This is the heart of the service marketplace.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- CATEGORIES
-- Organises listings into browsable groups (Fitness, Tutoring, Arts, etc.).
-- Supports nested sub-categories via parent_id for future expansion.
-- ---------------------------------------------------------------------------
CREATE TABLE categories (
    id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    parent_id       UUID        REFERENCES categories(id),            -- NULL = top-level category
    name            TEXT        NOT NULL,
    slug            TEXT        NOT NULL UNIQUE,                      -- URL-safe identifier e.g. "fitness-yoga"
    description     TEXT,
    icon_url        TEXT,                                             -- Optional category icon
    display_order   INTEGER     NOT NULL DEFAULT 0,
    is_active       BOOLEAN     NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_category_slug UNIQUE (slug)
);

CREATE INDEX idx_categories_parent ON categories(parent_id);
CREATE INDEX idx_categories_active ON categories(is_active);

COMMENT ON TABLE categories IS
    'Hierarchical listing categories. parent_id enables sub-categories
     (e.g. Fitness > Yoga, Fitness > Zumba).';

-- ---------------------------------------------------------------------------
-- LISTINGS
-- A listing is a service or class offered by a provider.
-- It describes WHAT is offered, not WHEN — scheduling lives in availability_slots.
-- Admins must approve listings before they appear to learners.
-- ---------------------------------------------------------------------------
CREATE TABLE listings (
    id                  UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    provider_id         UUID            NOT NULL REFERENCES users(id),
    apartment_id        UUID            NOT NULL REFERENCES apartments(id),  -- Restricts visibility to apartment
    category_id         UUID            NOT NULL REFERENCES categories(id),
    title               TEXT            NOT NULL,
    slug                TEXT            NOT NULL UNIQUE,              -- SEO/URL friendly
    description         TEXT            NOT NULL,
    mode                listing_mode    NOT NULL DEFAULT 'offline',
    location_details    TEXT,                                         -- e.g. "Clubhouse Room 2" or "Google Meet link sent after booking"
    age_group           age_group       NOT NULL DEFAULT 'all_ages',
    max_capacity        INTEGER         NOT NULL DEFAULT 1 CHECK (max_capacity >= 1),
    prerequisites       TEXT,                                         -- Text description of any prerequisites
    tags                TEXT[],                                       -- Searchable free-form tags
    status              listing_status  NOT NULL DEFAULT 'draft',
    is_featured         BOOLEAN         NOT NULL DEFAULT FALSE,        -- Admin-curated flag
    rejection_reason    TEXT,                                         -- Filled by admin when status = 'rejected'
    deleted_at          TIMESTAMPTZ,                                  -- Soft delete
    created_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    CONSTRAINT listings_title_length   CHECK (char_length(title) >= 5),
    CONSTRAINT listings_capacity_check CHECK (max_capacity BETWEEN 1 AND 500)
);

CREATE INDEX idx_listings_provider      ON listings(provider_id);
CREATE INDEX idx_listings_apartment     ON listings(apartment_id);
CREATE INDEX idx_listings_category      ON listings(category_id);
CREATE INDEX idx_listings_status        ON listings(status);
CREATE INDEX idx_listings_mode          ON listings(mode);
CREATE INDEX idx_listings_deleted       ON listings(deleted_at) WHERE deleted_at IS NULL;
-- Composite index for the most common discovery query: apartment + category + approved
CREATE INDEX idx_listings_discovery     ON listings(apartment_id, category_id, status)
    WHERE deleted_at IS NULL;
-- Full-text search on title + description
CREATE INDEX idx_listings_fts           ON listings USING GIN (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, ''))
);

COMMENT ON TABLE listings IS
    'Service or class offered by a provider. Requires admin approval before
     becoming discoverable. Scoped to an apartment to enforce community restriction.
     Soft-deleted instead of hard-deleted to preserve booking history.';

-- ---------------------------------------------------------------------------
-- LISTING_MEDIA
-- Images or promotional videos attached to a listing.
-- Storing media as a separate table enables ordered galleries and easy removal.
-- ---------------------------------------------------------------------------
CREATE TABLE listing_media (
    id              UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_id      UUID        NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
    media_url       TEXT        NOT NULL,
    media_type      TEXT        NOT NULL DEFAULT 'image'
                                CHECK (media_type IN ('image', 'video')),
    display_order   INTEGER     NOT NULL DEFAULT 0,
    alt_text        TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_listing_media_listing ON listing_media(listing_id);

COMMENT ON TABLE listing_media IS
    'Images and videos attached to a listing. Ordered by display_order
     for gallery rendering.';

-- ---------------------------------------------------------------------------
-- PRICING_PLANS
-- A listing can have multiple pricing options (e.g. single session AND bundle).
-- Learners pick a plan when they book.
-- ---------------------------------------------------------------------------
CREATE TABLE pricing_plans (
    id                  UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_id          UUID            NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
    name                TEXT            NOT NULL,                     -- e.g. "Drop-in Session", "Monthly Pass"
    pricing_type        pricing_type    NOT NULL,
    billing_cycle       billing_cycle   NOT NULL DEFAULT 'one_time',
    price_amount        NUMERIC(10, 2)  NOT NULL DEFAULT 0.00
                                        CHECK (price_amount >= 0),
    currency            TEXT            NOT NULL DEFAULT 'INR',
    sessions_included   INTEGER,                                      -- For bundles: how many sessions
    validity_days       INTEGER,                                      -- For subscriptions/bundles: expiry window
    description         TEXT,                                         -- Marketing copy for this plan
    is_active           BOOLEAN         NOT NULL DEFAULT TRUE,
    created_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
    updated_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    -- Free and skill-exchange plans must have price = 0
    CONSTRAINT price_zero_when_free
        CHECK (pricing_type NOT IN ('free', 'skill_exchange') OR price_amount = 0),
    -- Bundle plans must declare how many sessions are included
    CONSTRAINT bundle_sessions_required
        CHECK (pricing_type != 'bundle' OR sessions_included IS NOT NULL)
);

CREATE INDEX idx_pricing_plans_listing ON pricing_plans(listing_id);

COMMENT ON TABLE pricing_plans IS
    'One or more payment options per listing. A learner selects a plan at booking.
     Supports one-time, subscription, bundle, free, and skill-exchange models.';

-- ---------------------------------------------------------------------------
-- AVAILABILITY_SLOTS
-- Defines WHEN a listing is offered. Can be one-time (specific datetime)
-- or recurring (day-of-week + time pattern).
-- Bookings reference a specific slot.
-- ---------------------------------------------------------------------------
CREATE TABLE availability_slots (
    id              UUID            PRIMARY KEY DEFAULT gen_random_uuid(),
    listing_id      UUID            NOT NULL REFERENCES listings(id) ON DELETE CASCADE,
    slot_type       slot_type       NOT NULL DEFAULT 'one_time',

    -- For one-time slots
    start_datetime  TIMESTAMPTZ,
    end_datetime    TIMESTAMPTZ,

    -- For recurring slots
    day_of_week     day_of_week,
    start_time      TIME,                                             -- Local time of day
    end_time        TIME,
    recurrence_start DATE,                                            -- When recurrence begins
    recurrence_end   DATE,                                            -- When recurrence ends (NULL = indefinite)

    timezone        TEXT            NOT NULL DEFAULT 'Asia/Kolkata',
    max_capacity    INTEGER         NOT NULL DEFAULT 1 CHECK (max_capacity >= 1),
    notes           TEXT,
    is_active       BOOLEAN         NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMPTZ     NOT NULL DEFAULT NOW(),

    -- One-time slots must have explicit datetimes
    CONSTRAINT one_time_slot_datetimes
        CHECK (slot_type != 'one_time' OR (start_datetime IS NOT NULL AND end_datetime IS NOT NULL)),
    -- Recurring slots must define day + times
    CONSTRAINT recurring_slot_fields
        CHECK (slot_type != 'recurring' OR (day_of_week IS NOT NULL AND start_time IS NOT NULL AND end_time IS NOT NULL)),
    -- End must be after start for one-time slots
    CONSTRAINT slot_datetime_order
        CHECK (slot_type != 'one_time' OR end_datetime > start_datetime),
    -- Time order for recurring slots
    CONSTRAINT slot_time_order
        CHECK (slot_type != 'recurring' OR end_time > start_time)
);

CREATE INDEX idx_availability_slots_listing  ON availability_slots(listing_id);
CREATE INDEX idx_availability_slots_datetime ON availability_slots(start_datetime) WHERE slot_type = 'one_time';
CREATE INDEX idx_availability_slots_active   ON availability_slots(listing_id, is_active) WHERE is_active = TRUE;

COMMENT ON TABLE availability_slots IS
    'Defines when a listing is available. One-time slots have fixed datetimes;
     recurring slots use a day+time pattern. Bookings reference a specific slot.';
