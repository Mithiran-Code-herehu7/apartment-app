-- =============================================================================
-- FILE: 00_enums.sql
-- PURPOSE: Define all custom ENUM types before tables are created.
--          Centralizing enums prevents duplication and enforces valid states.
-- =============================================================================

-- ---------------------------------------------------------------------------
-- USER & APARTMENT ENUMS
-- ---------------------------------------------------------------------------

-- Lifecycle state of a user account within the platform
CREATE TYPE user_status AS ENUM (
    'pending',      -- Registered but not yet apartment-verified
    'verified',     -- Apartment membership confirmed, fully active
    'suspended',    -- Temporarily blocked by admin
    'rejected',     -- Verification denied
    'deactivated'   -- Self-deactivated or soft-deleted
);

-- Platform-level roles. A user may hold multiple roles via user_roles table.
CREATE TYPE user_role AS ENUM (
    'learner',      -- Can discover and book listings
    'provider',     -- Can create listings and receive payments
    'admin'         -- Can manage the community, approvals, disputes
);

-- How a user was invited / verified into an apartment community
CREATE TYPE invite_status AS ENUM (
    'pending',      -- Invite sent, not yet accepted
    'accepted',     -- User accepted the invite and registered
    'expired',      -- Token TTL passed without use
    'revoked'       -- Admin manually cancelled the invite
);

-- ---------------------------------------------------------------------------
-- LISTING ENUMS
-- ---------------------------------------------------------------------------

-- Approval lifecycle of a listing (admin must approve before it's discoverable)
CREATE TYPE listing_status AS ENUM (
    'draft',         -- Provider saved but not submitted for review
    'pending_review',-- Submitted, awaiting admin approval
    'approved',      -- Live and discoverable
    'rejected',      -- Admin declined, provider can edit and resubmit
    'archived',      -- Soft-removed by provider or admin
    'suspended'      -- Admin-suspended (e.g., during dispute)
);

-- Where the session takes place
CREATE TYPE listing_mode AS ENUM (
    'offline',       -- In-person, at a location within the apartment
    'online',        -- Video call / remote
    'hybrid'         -- Both modes available
);

-- High-level target demographic for a listing
CREATE TYPE age_group AS ENUM (
    'children',      -- Under 12
    'teens',         -- 12–17
    'adults',        -- 18+
    'seniors',       -- 60+
    'all_ages'       -- No restriction
);

-- ---------------------------------------------------------------------------
-- PRICING ENUMS
-- ---------------------------------------------------------------------------

CREATE TYPE pricing_type AS ENUM (
    'one_time',      -- Single session payment
    'subscription',  -- Recurring (weekly/monthly) membership
    'bundle',        -- Pre-paid package of N sessions
    'free',          -- No charge
    'skill_exchange' -- Barter — recorded but no money changes hands
);

CREATE TYPE billing_cycle AS ENUM (
    'one_time',
    'weekly',
    'monthly',
    'quarterly'
);

-- ---------------------------------------------------------------------------
-- AVAILABILITY & BOOKING ENUMS
-- ---------------------------------------------------------------------------

-- Days of week for recurring slots
CREATE TYPE day_of_week AS ENUM (
    'monday', 'tuesday', 'wednesday', 'thursday',
    'friday', 'saturday', 'sunday'
);

CREATE TYPE slot_type AS ENUM (
    'one_time',    -- Single occurrence
    'recurring'    -- Repeats on a schedule
);

CREATE TYPE booking_status AS ENUM (
    'pending',       -- Created, payment not yet confirmed
    'confirmed',     -- Payment confirmed, session is locked
    'completed',     -- Session has occurred
    'cancelled',     -- Cancelled by learner or provider
    'no_show',       -- Learner did not attend
    'refunded'       -- Payment reversed
);

-- Who initiated a cancellation
CREATE TYPE cancellation_party AS ENUM (
    'learner',
    'provider',
    'admin'
);

-- ---------------------------------------------------------------------------
-- PAYMENT ENUMS
-- ---------------------------------------------------------------------------

CREATE TYPE payment_status AS ENUM (
    'initiated',     -- Payment gateway request sent
    'pending',       -- Awaiting gateway confirmation
    'succeeded',     -- Funds captured
    'failed',        -- Gateway declined
    'refunded',      -- Fully refunded
    'partially_refunded',
    'disputed'       -- Chargeback or platform dispute raised
);

CREATE TYPE payment_method AS ENUM (
    'card',
    'upi',
    'net_banking',
    'wallet',
    'cash',          -- Manual settlement recorded by admin
    'skill_exchange' -- No monetary transaction
);

CREATE TYPE payout_status AS ENUM (
    'pending',       -- Not yet settled to provider
    'processing',    -- Settlement in progress
    'paid',          -- Funds transferred to provider
    'on_hold',       -- Frozen due to dispute
    'failed'
);

-- ---------------------------------------------------------------------------
-- REVIEW ENUMS
-- ---------------------------------------------------------------------------

CREATE TYPE review_target AS ENUM (
    'listing',   -- Learner reviews the listing / provider
    'learner'    -- Provider reviews the learner (optional, future)
);

-- ---------------------------------------------------------------------------
-- ADMIN / MODERATION ENUMS
-- ---------------------------------------------------------------------------

CREATE TYPE admin_action_type AS ENUM (
    'user_verified',
    'user_rejected',
    'user_suspended',
    'user_reactivated',
    'listing_approved',
    'listing_rejected',
    'listing_suspended',
    'dispute_opened',
    'dispute_resolved',
    'dispute_dismissed',
    'refund_issued',
    'payout_released',
    'invite_revoked',
    'note_added'
);

CREATE TYPE dispute_status AS ENUM (
    'open',
    'under_review',
    'resolved',
    'dismissed'
);

CREATE TYPE dispute_resolution AS ENUM (
    'refunded',
    'partial_refund',
    'no_action',
    'provider_penalised',
    'learner_penalised'
);

-- ---------------------------------------------------------------------------
-- NOTIFICATION ENUMS
-- ---------------------------------------------------------------------------

CREATE TYPE notification_channel AS ENUM (
    'in_app',
    'email',
    'sms',
    'push'
);

CREATE TYPE notification_status AS ENUM (
    'pending',
    'sent',
    'failed',
    'read'
);
