-- =============================================================================
-- FILE: 07_triggers_functions.sql
-- PURPOSE: PostgreSQL functions and triggers for automation:
--          - Auto-update updated_at on every table
--          - Enforce review eligibility (booking must be 'completed')
--          - Auto-set provider_id on bookings from listing
--          - Prevent double-booking on a slot beyond capacity
-- =============================================================================

-- ---------------------------------------------------------------------------
-- UTILITY: updated_at auto-stamp trigger function
-- One function, attached to every table that has an updated_at column.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION trigger_set_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$;

-- Attach to every major table
CREATE TRIGGER trg_apartments_updated_at
    BEFORE UPDATE ON apartments
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_apartment_invites_updated_at
    BEFORE UPDATE ON apartment_invites
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_user_profiles_updated_at
    BEFORE UPDATE ON user_profiles
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_categories_updated_at
    BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_listings_updated_at
    BEFORE UPDATE ON listings
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_pricing_plans_updated_at
    BEFORE UPDATE ON pricing_plans
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_availability_slots_updated_at
    BEFORE UPDATE ON availability_slots
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_bookings_updated_at
    BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_payments_updated_at
    BEFORE UPDATE ON payments
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_payout_tracking_updated_at
    BEFORE UPDATE ON payout_tracking
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_reviews_updated_at
    BEFORE UPDATE ON reviews
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_disputes_updated_at
    BEFORE UPDATE ON disputes
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_notifications_updated_at
    BEFORE UPDATE ON notifications
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

CREATE TRIGGER trg_notification_templates_updated_at
    BEFORE UPDATE ON notification_templates
    FOR EACH ROW EXECUTE FUNCTION trigger_set_updated_at();

-- ---------------------------------------------------------------------------
-- GUARD: Reviews must reference a completed booking
-- Raises an exception if someone tries to insert a review for a booking
-- that is not in 'completed' status.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION check_review_booking_completed()
RETURNS TRIGGER
LANGUAGE plpgsql AS $$
DECLARE
    v_status booking_status;
BEGIN
    SELECT status INTO v_status
    FROM   bookings
    WHERE  id = NEW.booking_id;

    IF v_status IS DISTINCT FROM 'completed' THEN
        RAISE EXCEPTION
            'Reviews can only be submitted for completed bookings. '
            'Booking % has status: %', NEW.booking_id, v_status;
    END IF;

    RETURN NEW;
END;
$$;

CREATE TRIGGER trg_review_booking_check
    BEFORE INSERT ON reviews
    FOR EACH ROW EXECUTE FUNCTION check_review_booking_completed();

-- ---------------------------------------------------------------------------
-- AUTO-FILL: Denormalize provider_id on bookings from listing
-- Avoids a join every time we need the provider for a booking.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION set_booking_provider_id()
RETURNS TRIGGER
LANGUAGE plpgsql AS $$
BEGIN
    SELECT provider_id INTO NEW.provider_id
    FROM   listings
    WHERE  id = NEW.listing_id;

    IF NEW.provider_id IS NULL THEN
        RAISE EXCEPTION 'Listing % not found or has no provider', NEW.listing_id;
    END IF;

    RETURN NEW;
END;
$$;

CREATE TRIGGER trg_booking_set_provider
    BEFORE INSERT ON bookings
    FOR EACH ROW EXECUTE FUNCTION set_booking_provider_id();

-- ---------------------------------------------------------------------------
-- GUARD: Slot capacity check
-- Prevents over-booking a slot beyond its max_capacity.
-- Counts confirmed + pending bookings for the slot.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION check_slot_capacity()
RETURNS TRIGGER
LANGUAGE plpgsql AS $$
DECLARE
    v_max_capacity  INTEGER;
    v_booked_count  INTEGER;
BEGIN
    -- Get the slot's max capacity
    SELECT max_capacity INTO v_max_capacity
    FROM   availability_slots
    WHERE  id = NEW.slot_id;

    -- Count active (non-cancelled, non-refunded) bookings for this slot
    SELECT COUNT(*) INTO v_booked_count
    FROM   bookings
    WHERE  slot_id    = NEW.slot_id
      AND  status     NOT IN ('cancelled', 'refunded', 'no_show')
      AND  deleted_at IS NULL
      AND  id         != COALESCE(NEW.id, gen_random_uuid());  -- Exclude self on update

    IF v_booked_count >= v_max_capacity THEN
        RAISE EXCEPTION
            'Slot % is fully booked (capacity: %, current bookings: %)',
            NEW.slot_id, v_max_capacity, v_booked_count;
    END IF;

    RETURN NEW;
END;
$$;

CREATE TRIGGER trg_booking_capacity_check
    BEFORE INSERT OR UPDATE ON bookings
    FOR EACH ROW
    WHEN (NEW.status NOT IN ('cancelled', 'refunded', 'no_show'))
    EXECUTE FUNCTION check_slot_capacity();

-- ---------------------------------------------------------------------------
-- UTILITY: Invite token auto-expiry enforcement on status update
-- When a user registers with an invite, mark the invite as 'accepted'
-- and set used_by. Called from application layer but also available as a
-- stored procedure for batch operations.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE PROCEDURE use_invite(
    p_token     TEXT,
    p_user_id   UUID
)
LANGUAGE plpgsql AS $$
DECLARE
    v_invite_id UUID;
    v_status    invite_status;
    v_expires   TIMESTAMPTZ;
BEGIN
    SELECT id, status, token_expires_at
    INTO   v_invite_id, v_status, v_expires
    FROM   apartment_invites
    WHERE  token = p_token;

    IF NOT FOUND THEN
        RAISE EXCEPTION 'Invalid invite token';
    END IF;

    IF v_status != 'pending' THEN
        RAISE EXCEPTION 'Invite token is not available (status: %)', v_status;
    END IF;

    IF v_expires < NOW() THEN
        UPDATE apartment_invites SET status = 'expired', updated_at = NOW()
        WHERE id = v_invite_id;
        RAISE EXCEPTION 'Invite token has expired';
    END IF;

    UPDATE apartment_invites
    SET    status     = 'accepted',
           used_by    = p_user_id,
           updated_at = NOW()
    WHERE  id = v_invite_id;
END;
$$;

-- ---------------------------------------------------------------------------
-- UTILITY: Compute listing average rating (used as a materialized view hint)
-- In production, consider a MATERIALIZED VIEW refreshed periodically.
-- ---------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION get_listing_avg_rating(p_listing_id UUID)
RETURNS NUMERIC
LANGUAGE sql STABLE AS $$
    SELECT ROUND(AVG(rating)::NUMERIC, 2)
    FROM   reviews
    WHERE  listing_id  = p_listing_id
      AND  target       = 'listing'
      AND  is_visible   = TRUE
      AND  deleted_at   IS NULL;
$$;
