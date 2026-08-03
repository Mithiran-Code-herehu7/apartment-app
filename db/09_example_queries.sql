-- =============================================================================
-- FILE: 09_example_queries.sql
-- PURPOSE: Annotated example queries for the most common operations.
--          Each query mirrors a real API endpoint or admin action.
-- =============================================================================

-- ===========================================================================
-- 1. ONBOARDING: Create a user after apartment verification
--    Flow: Admin creates invite → resident registers → invite consumed
-- ===========================================================================

-- Step 1a: Admin creates an invite (application generates the token)
INSERT INTO apartment_invites
    (apartment_id, invited_email, token, token_expires_at, unit_number, invited_by)
VALUES
    (
        '00000000-0000-0000-0000-000000000001',    -- apartment
        'neha.kapoor@example.com',
        'tok_neha_ghij789rst',                     -- app generates: crypto.randomBytes(32).toString('hex')
        NOW() + INTERVAL '48 hours',
        'E-501',
        '00000000-0000-0000-0000-000000000010'     -- admin user
    );

-- Step 1b: User registers; use the stored procedure to consume the token
CALL use_invite('tok_neha_ghij789rst', '<new-user-uuid>');

-- Step 1c: Update the users row to link invite and set status to 'verified'
-- (done together with invite consumption in a transaction)
/*
BEGIN;
    INSERT INTO users (id, auth_uid, email, apartment_id, unit_number, invite_id, status)
    VALUES ('<uuid>', '<supabase-auth-uid>', 'neha.kapoor@example.com',
            '<apartment_id>', 'E-501', '<invite_id>', 'pending');

    CALL use_invite('tok_neha_ghij789rst', '<uuid>');

    -- Admin approval upgrades status to 'verified' separately
COMMIT;
*/


-- ===========================================================================
-- 2. LISTING CREATION: Provider submits a listing for admin review
-- ===========================================================================

INSERT INTO listings
    (provider_id, apartment_id, category_id,
     title, slug, description, mode, location_details,
     age_group, max_capacity, status)
VALUES
    (
        '00000000-0000-0000-0000-000000000011',    -- Priya (provider)
        '00000000-0000-0000-0000-000000000001',
        '00000000-0000-0000-0000-000000000030',    -- Fitness category
        'Evening Zumba Dance Fitness',
        'evening-zumba-prestige',
        'High-energy Zumba class blending Latin rhythms with cardio. '
        'No dance experience needed — just bring energy!',
        'offline', 'Rooftop terrace (weather permitting)',
        'adults', 20,
        'pending_review'                            -- Submitted for admin approval
    )
RETURNING id;


-- ===========================================================================
-- 3. DISCOVERY: Fetch approved listings for an apartment + category
--    With average rating and provider name — the main browse feed.
-- ===========================================================================

SELECT
    l.id,
    l.title,
    l.slug,
    l.mode,
    l.age_group,
    l.max_capacity,
    c.name                              AS category_name,
    up.display_name                     AS provider_name,
    up.avatar_url                       AS provider_avatar,
    get_listing_avg_rating(l.id)        AS avg_rating,
    COUNT(DISTINCT r.id)                AS review_count,
    MIN(pp.price_amount)                AS starting_price,
    lm.media_url                        AS cover_image
FROM   listings l
JOIN   categories      c  ON c.id  = l.category_id
JOIN   user_profiles   up ON up.user_id = l.provider_id
LEFT JOIN reviews      r  ON r.listing_id = l.id
                         AND r.is_visible = TRUE
                         AND r.deleted_at IS NULL
LEFT JOIN pricing_plans pp ON pp.listing_id = l.id AND pp.is_active = TRUE
LEFT JOIN LATERAL (
    SELECT media_url FROM listing_media
    WHERE listing_id = l.id
    ORDER BY display_order LIMIT 1
) lm ON TRUE
WHERE  l.apartment_id = '00000000-0000-0000-0000-000000000001'
  AND  l.category_id  = '00000000-0000-0000-0000-000000000035'  -- Yoga sub-category
  AND  l.status       = 'approved'
  AND  l.deleted_at   IS NULL
GROUP BY l.id, c.name, up.display_name, up.avatar_url, lm.media_url
ORDER BY l.is_featured DESC, avg_rating DESC NULLS LAST;


-- ===========================================================================
-- 4. BOOKING CREATION: Learner books a specific slot + pricing plan
-- ===========================================================================

INSERT INTO bookings
    (learner_id, listing_id, slot_id, pricing_plan_id,
     status, session_start, session_end)
VALUES
    (
        '00000000-0000-0000-0000-000000000012',    -- Rahul (learner)
        '00000000-0000-0000-0000-000000000040',    -- Yoga listing
        '00000000-0000-0000-0000-000000000061',    -- Wednesday slot
        '00000000-0000-0000-0000-000000000050',    -- Drop-in plan (₹299)
        'pending',
        '2026-06-04 06:30:00+05:30',
        '2026-06-04 07:30:00+05:30'
    )
-- provider_id is auto-filled by trigger trg_booking_set_provider
-- capacity is validated by trigger trg_booking_capacity_check
RETURNING id, provider_id;


-- ===========================================================================
-- 5. PAYMENT INITIATION: Record payment after gateway order created
-- ===========================================================================

INSERT INTO payments
    (booking_id, payer_id, payee_id,
     amount, platform_fee, provider_amount, tax_amount,
     payment_method, status,
     gateway_name, gateway_order_id)
VALUES
    (
        '<booking-uuid>',
        '00000000-0000-0000-0000-000000000012',    -- payer = learner
        '00000000-0000-0000-0000-000000000011',    -- payee = provider
        299.00,
        29.90,                                     -- 10% platform fee
        269.10,
        0.00,
        'upi',
        'initiated',
        'razorpay',
        'order_RZPxxxxx'                           -- from Razorpay API response
    );

-- After gateway webhook confirms payment:
UPDATE payments
SET
    status             = 'succeeded',
    gateway_payment_id = 'pay_RZPyyyyy',
    gateway_signature  = 'sig_abc...',
    gateway_raw_response = '{"event":"payment.captured", ...}'::jsonb,
    succeeded_at       = NOW()
WHERE gateway_order_id = 'order_RZPxxxxx';

-- Confirm the booking
UPDATE bookings
SET status = 'confirmed'
WHERE id = '<booking-uuid>';


-- ===========================================================================
-- 6. REVIEW SUBMISSION: Learner reviews after booking is completed
-- ===========================================================================

-- First verify the booking is completed (the trigger also enforces this)
SELECT status FROM bookings WHERE id = '<booking-uuid>';

INSERT INTO reviews
    (booking_id, reviewer_id, reviewee_id, listing_id,
     target, rating, title, body)
VALUES
    (
        '<booking-uuid>',
        '00000000-0000-0000-0000-000000000012',    -- reviewer = learner
        '00000000-0000-0000-0000-000000000011',    -- reviewee = provider
        '00000000-0000-0000-0000-000000000040',
        'listing', 4,
        'Great class, very calming',
        'Really enjoyed the pace. Would have loved slightly more flow sequences.'
    );


-- ===========================================================================
-- 7. ADMIN: Fetch pending approval queue (listings + users)
-- ===========================================================================

-- Pending listings awaiting admin review
SELECT
    l.id,
    l.title,
    l.created_at                        AS submitted_at,
    up.display_name                     AS provider_name,
    u.email                             AS provider_email,
    u.unit_number,
    c.name                              AS category
FROM   listings      l
JOIN   users         u  ON u.id  = l.provider_id
JOIN   user_profiles up ON up.user_id = u.id
JOIN   categories    c  ON c.id  = l.category_id
WHERE  l.apartment_id = '00000000-0000-0000-0000-000000000001'
  AND  l.status       = 'pending_review'
  AND  l.deleted_at   IS NULL
ORDER BY l.created_at ASC;

-- Pending users awaiting verification
SELECT
    u.id,
    u.email,
    u.unit_number,
    u.created_at,
    ai.invited_email,
    ai.notes AS invite_notes
FROM   users            u
LEFT JOIN apartment_invites ai ON ai.id = u.invite_id
WHERE  u.apartment_id = '00000000-0000-0000-0000-000000000001'
  AND  u.status       = 'pending'
  AND  u.deleted_at   IS NULL
ORDER BY u.created_at ASC;


-- ===========================================================================
-- 8. ADMIN: Approve a listing
-- ===========================================================================

BEGIN;
    UPDATE listings
    SET    status     = 'approved',
           updated_at = NOW()
    WHERE  id = '00000000-0000-0000-0000-000000000040';

    INSERT INTO admin_actions
        (admin_id, action_type, target_type, target_id, notes, apartment_id)
    VALUES
        (
            '00000000-0000-0000-0000-000000000010',
            'listing_approved',
            'listing',
            '00000000-0000-0000-0000-000000000040',
            'Listing content verified. Instructor credentials checked.',
            '00000000-0000-0000-0000-000000000001'
        );
COMMIT;


-- ===========================================================================
-- 9. PROVIDER: Fetch my upcoming confirmed bookings
-- ===========================================================================

SELECT
    b.id                                AS booking_id,
    b.session_start,
    b.session_end,
    b.status,
    up.display_name                     AS learner_name,
    u.unit_number                       AS learner_unit,
    l.title                             AS listing_title,
    pp.name                             AS plan_name,
    pp.price_amount
FROM   bookings      b
JOIN   listings      l  ON l.id  = b.listing_id
JOIN   users         u  ON u.id  = b.learner_id
JOIN   user_profiles up ON up.user_id = b.learner_id
JOIN   pricing_plans pp ON pp.id = b.pricing_plan_id
WHERE  b.provider_id  = '00000000-0000-0000-0000-000000000011'
  AND  b.status       = 'confirmed'
  AND  b.session_start >= NOW()
  AND  b.deleted_at   IS NULL
ORDER BY b.session_start ASC;


-- ===========================================================================
-- 10. LEARNER: My booking history with review status
-- ===========================================================================

SELECT
    b.id                                AS booking_id,
    b.session_start,
    b.status                            AS booking_status,
    l.title                             AS listing_title,
    up.display_name                     AS provider_name,
    pp.price_amount,
    py.status                           AS payment_status,
    r.rating                            AS my_rating,
    r.id IS NOT NULL                    AS has_reviewed
FROM   bookings      b
JOIN   listings      l  ON l.id  = b.listing_id
JOIN   user_profiles up ON up.user_id = b.provider_id
JOIN   pricing_plans pp ON pp.id = b.pricing_plan_id
LEFT JOIN payments   py ON py.booking_id = b.id
LEFT JOIN reviews    r  ON r.booking_id  = b.id
                       AND r.reviewer_id = b.learner_id
WHERE  b.learner_id = '00000000-0000-0000-0000-000000000012'
  AND  b.deleted_at IS NULL
ORDER BY b.session_start DESC;


-- ===========================================================================
-- 11. ADMIN: Open disputes queue
-- ===========================================================================

SELECT
    d.id,
    d.subject,
    d.status,
    d.created_at,
    filer.display_name                  AS filed_by_name,
    accused.display_name                AS against_name,
    l.title                             AS booking_listing,
    b.session_start
FROM   disputes      d
JOIN   user_profiles filer   ON filer.user_id   = d.filed_by
JOIN   user_profiles accused ON accused.user_id  = d.against_user_id
JOIN   bookings      b  ON b.id = d.booking_id
JOIN   listings      l  ON l.id = b.listing_id
WHERE  d.apartment_id = '00000000-0000-0000-0000-000000000001'
  AND  d.status IN ('open', 'under_review')
ORDER BY d.created_at ASC;


-- ===========================================================================
-- 12. PAYOUT: Calculate provider earnings for a period
-- ===========================================================================

SELECT
    u.id                                AS provider_id,
    up.display_name                     AS provider_name,
    COUNT(py.id)                        AS sessions_paid,
    SUM(py.provider_amount)             AS gross_earnings,
    SUM(py.platform_fee)                AS platform_fees,
    SUM(py.provider_amount - py.platform_fee)  AS net_payout
FROM   payments      py
JOIN   bookings      b  ON b.id  = py.booking_id
JOIN   users         u  ON u.id  = b.provider_id
JOIN   user_profiles up ON up.user_id = u.id
WHERE  b.apartment_id   = '00000000-0000-0000-0000-000000000001'
  AND  py.status         = 'succeeded'
  AND  py.succeeded_at  BETWEEN '2026-06-01' AND '2026-06-30'
  AND  b.deleted_at      IS NULL
GROUP BY u.id, up.display_name
ORDER BY net_payout DESC;
