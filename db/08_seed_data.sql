-- =============================================================================
-- FILE: 08_seed_data.sql
-- PURPOSE: Realistic seed data for development and manual testing.
--          Covers the full booking lifecycle end-to-end:
--          apartment → invite → user → listing → slot → booking → payment → review
-- =============================================================================

-- Use a fixed seed transaction so IDs are predictable in tests
BEGIN;

-- ---------------------------------------------------------------------------
-- 1. APARTMENT
-- ---------------------------------------------------------------------------
INSERT INTO apartments (id, name, address_line1, city, state, postal_code)
VALUES (
    '00000000-0000-0000-0000-000000000001',
    'Prestige Lakeside Habitat',
    '15 Lakeside Avenue, Whitefield',
    'Bengaluru', 'Karnataka', '560066'
);

-- ---------------------------------------------------------------------------
-- 2. USERS  (passwords managed by auth provider — not stored here)
-- ---------------------------------------------------------------------------
-- Admin user
INSERT INTO users (id, auth_uid, email, phone, apartment_id, unit_number, status, email_verified)
VALUES (
    '00000000-0000-0000-0000-000000000010',
    '00000000-aaaa-aaaa-aaaa-000000000010',
    'admin@prestige-lakeside.com', '+919900000001',
    '00000000-0000-0000-0000-000000000001', 'ADMIN',
    'verified', TRUE
);

-- Provider: Yoga instructor
INSERT INTO users (id, auth_uid, email, phone, apartment_id, unit_number, status, email_verified)
VALUES (
    '00000000-0000-0000-0000-000000000011',
    '00000000-aaaa-aaaa-aaaa-000000000011',
    'priya.sharma@example.com', '+919900000002',
    '00000000-0000-0000-0000-000000000001', 'B-204',
    'verified', TRUE
);

-- Learner
INSERT INTO users (id, auth_uid, email, phone, apartment_id, unit_number, status, email_verified)
VALUES (
    '00000000-0000-0000-0000-000000000012',
    '00000000-aaaa-aaaa-aaaa-000000000012',
    'rahul.verma@example.com', '+919900000003',
    '00000000-0000-0000-0000-000000000001', 'A-101',
    'verified', TRUE
);

-- User who is both learner and provider
INSERT INTO users (id, auth_uid, email, phone, apartment_id, unit_number, status, email_verified)
VALUES (
    '00000000-0000-0000-0000-000000000013',
    '00000000-aaaa-aaaa-aaaa-000000000013',
    'meera.nair@example.com', '+919900000004',
    '00000000-0000-0000-0000-000000000001', 'C-312',
    'verified', TRUE
);

-- Pending user (not yet verified)
INSERT INTO users (id, auth_uid, email, phone, apartment_id, unit_number, status, email_verified)
VALUES (
    '00000000-0000-0000-0000-000000000014',
    '00000000-aaaa-aaaa-aaaa-000000000014',
    'arjun.menon@example.com', '+919900000005',
    '00000000-0000-0000-0000-000000000001', 'D-105',
    'pending', FALSE
);

-- ---------------------------------------------------------------------------
-- 3. ROLES
-- ---------------------------------------------------------------------------
INSERT INTO user_roles (user_id, role, granted_by) VALUES
    ('00000000-0000-0000-0000-000000000010', 'admin',    '00000000-0000-0000-0000-000000000010'),
    ('00000000-0000-0000-0000-000000000010', 'provider', '00000000-0000-0000-0000-000000000010'),
    ('00000000-0000-0000-0000-000000000011', 'provider', '00000000-0000-0000-0000-000000000010'),
    ('00000000-0000-0000-0000-000000000011', 'learner',  '00000000-0000-0000-0000-000000000010'),
    ('00000000-0000-0000-0000-000000000012', 'learner',  '00000000-0000-0000-0000-000000000010'),
    ('00000000-0000-0000-0000-000000000013', 'learner',  '00000000-0000-0000-0000-000000000010'),
    ('00000000-0000-0000-0000-000000000013', 'provider', '00000000-0000-0000-0000-000000000010');

-- ---------------------------------------------------------------------------
-- 4. USER PROFILES
-- ---------------------------------------------------------------------------
INSERT INTO user_profiles (user_id, display_name, bio, languages, skills_offered) VALUES
    ('00000000-0000-0000-0000-000000000010',
     'Admin – Prestige Lakeside', 'Community manager.', ARRAY['English', 'Kannada'], NULL),

    ('00000000-0000-0000-0000-000000000011',
     'Priya Sharma',
     'Certified Hatha & Vinyasa yoga instructor with 8 years of experience. '
     'Classes for all levels from beginner to advanced.',
     ARRAY['English', 'Hindi', 'Telugu'],
     ARRAY['Yoga', 'Meditation', 'Breathing Exercises']),

    ('00000000-0000-0000-0000-000000000012',
     'Rahul Verma',
     'Software engineer. Loves learning new skills in my community.',
     ARRAY['English', 'Hindi'], NULL),

    ('00000000-0000-0000-0000-000000000013',
     'Meera Nair',
     'Carnatic vocalist and piano teacher. Also learning photography.',
     ARRAY['English', 'Malayalam', 'Tamil'],
     ARRAY['Carnatic Music', 'Piano', 'Music Theory']);

-- ---------------------------------------------------------------------------
-- 5. APARTMENT INVITES
-- ---------------------------------------------------------------------------
INSERT INTO apartment_invites
    (id, apartment_id, invited_email, token, token_expires_at, unit_number, status, invited_by, used_by)
VALUES
    ('00000000-0000-0000-0000-000000000020',
     '00000000-0000-0000-0000-000000000001',
     'priya.sharma@example.com',
     'tok_priya_abc123xyz', NOW() + INTERVAL '48 hours',
     'B-204', 'accepted',
     '00000000-0000-0000-0000-000000000010',
     '00000000-0000-0000-0000-000000000011'),

    ('00000000-0000-0000-0000-000000000021',
     '00000000-0000-0000-0000-000000000001',
     'arjun.menon@example.com',
     'tok_arjun_def456uvw', NOW() + INTERVAL '48 hours',
     'D-105', 'pending',
     '00000000-0000-0000-0000-000000000010',
     NULL);

-- ---------------------------------------------------------------------------
-- 6. CATEGORIES
-- ---------------------------------------------------------------------------
INSERT INTO categories (id, name, slug, description, display_order) VALUES
    ('00000000-0000-0000-0000-000000000030', 'Fitness & Wellness',  'fitness-wellness',  'Yoga, aerobics, meditation, and general wellness', 1),
    ('00000000-0000-0000-0000-000000000031', 'Tutoring & Education','tutoring-education','Academic help for school and college subjects', 2),
    ('00000000-0000-0000-0000-000000000032', 'Music & Performing Arts','music-arts',      'Instruments, vocal, dance, and drama', 3),
    ('00000000-0000-0000-0000-000000000033', 'Home Services',       'home-services',     'Plumbing, electrical, cooking classes, repairs', 4),
    ('00000000-0000-0000-0000-000000000034', 'Technology & Coding', 'tech-coding',       'Programming, data science, design tools', 5);

-- Sub-categories
INSERT INTO categories (id, parent_id, name, slug, display_order) VALUES
    ('00000000-0000-0000-0000-000000000035',
     '00000000-0000-0000-0000-000000000030',
     'Yoga', 'fitness-yoga', 1),

    ('00000000-0000-0000-0000-000000000036',
     '00000000-0000-0000-0000-000000000032',
     'Carnatic Music', 'music-carnatic', 1);

-- ---------------------------------------------------------------------------
-- 7. LISTINGS
-- ---------------------------------------------------------------------------
INSERT INTO listings
    (id, provider_id, apartment_id, category_id, title, slug,
     description, mode, location_details, age_group, max_capacity, status)
VALUES
    ('00000000-0000-0000-0000-000000000040',
     '00000000-0000-0000-0000-000000000011',
     '00000000-0000-0000-0000-000000000001',
     '00000000-0000-0000-0000-000000000035',
     'Morning Hatha Yoga – All Levels',
     'morning-hatha-yoga-prestige',
     'Start your day with a grounding Hatha yoga practice. '
     'Suitable for complete beginners to intermediate practitioners. '
     'Mats provided. Please bring a small towel and water bottle.',
     'offline', 'Clubhouse Multipurpose Hall',
     'all_ages', 12, 'approved'),

    ('00000000-0000-0000-0000-000000000041',
     '00000000-0000-0000-0000-000000000013',
     '00000000-0000-0000-0000-000000000001',
     '00000000-0000-0000-0000-000000000036',
     'Carnatic Vocal Basics',
     'carnatic-vocal-basics-prestige',
     'Learn the fundamentals of Carnatic music — swaras, alankaras, '
     'and your first varnams. Taught in a relaxed, encouraging environment.',
     'offline', 'Flat C-312 (provider home studio)',
     'all_ages', 4, 'approved');

-- ---------------------------------------------------------------------------
-- 8. LISTING MEDIA
-- ---------------------------------------------------------------------------
INSERT INTO listing_media (listing_id, media_url, media_type, display_order, alt_text) VALUES
    ('00000000-0000-0000-0000-000000000040',
     'https://storage.example.com/listings/yoga-class-clubhouse.jpg',
     'image', 1, 'Yoga session in the Prestige Lakeside clubhouse'),

    ('00000000-0000-0000-0000-000000000041',
     'https://storage.example.com/listings/carnatic-vocal.jpg',
     'image', 1, 'Meera teaching Carnatic music');

-- ---------------------------------------------------------------------------
-- 9. PRICING PLANS
-- ---------------------------------------------------------------------------
INSERT INTO pricing_plans
    (id, listing_id, name, pricing_type, billing_cycle,
     price_amount, sessions_included, validity_days)
VALUES
    -- Yoga: drop-in
    ('00000000-0000-0000-0000-000000000050',
     '00000000-0000-0000-0000-000000000040',
     'Drop-in Session', 'one_time', 'one_time', 299.00, NULL, NULL),

    -- Yoga: monthly pass (12 sessions)
    ('00000000-0000-0000-0000-000000000051',
     '00000000-0000-0000-0000-000000000040',
     'Monthly Pass (12 sessions)', 'bundle', 'one_time', 2499.00, 12, 30),

    -- Yoga: subscription
    ('00000000-0000-0000-0000-000000000052',
     '00000000-0000-0000-0000-000000000040',
     'Monthly Subscription', 'subscription', 'monthly', 1999.00, NULL, 30),

    -- Carnatic: one-on-one session
    ('00000000-0000-0000-0000-000000000053',
     '00000000-0000-0000-0000-000000000041',
     'Single Lesson (45 min)', 'one_time', 'one_time', 500.00, NULL, NULL),

    -- Carnatic: free trial
    ('00000000-0000-0000-0000-000000000054',
     '00000000-0000-0000-0000-000000000041',
     'Free Trial Class', 'free', 'one_time', 0.00, NULL, NULL);

-- ---------------------------------------------------------------------------
-- 10. AVAILABILITY SLOTS
-- ---------------------------------------------------------------------------
INSERT INTO availability_slots
    (id, listing_id, slot_type, day_of_week, start_time, end_time,
     recurrence_start, timezone, max_capacity)
VALUES
    -- Yoga: Mon/Wed/Fri mornings recurring
    ('00000000-0000-0000-0000-000000000060',
     '00000000-0000-0000-0000-000000000040',
     'recurring', 'monday', '06:30', '07:30',
     '2026-06-02', 'Asia/Kolkata', 12),

    ('00000000-0000-0000-0000-000000000061',
     '00000000-0000-0000-0000-000000000040',
     'recurring', 'wednesday', '06:30', '07:30',
     '2026-06-04', 'Asia/Kolkata', 12),

    ('00000000-0000-0000-0000-000000000062',
     '00000000-0000-0000-0000-000000000040',
     'recurring', 'friday', '06:30', '07:30',
     '2026-06-06', 'Asia/Kolkata', 12);

INSERT INTO availability_slots
    (id, listing_id, slot_type, start_datetime, end_datetime, timezone, max_capacity)
VALUES
    -- Carnatic: specific one-time trial slot
    ('00000000-0000-0000-0000-000000000063',
     '00000000-0000-0000-0000-000000000041',
     'one_time',
     '2026-06-07 10:00:00+05:30',
     '2026-06-07 10:45:00+05:30',
     'Asia/Kolkata', 1);

-- ---------------------------------------------------------------------------
-- 11. BOOKINGS
-- ---------------------------------------------------------------------------
-- Rahul books the yoga drop-in on Monday slot
INSERT INTO bookings
    (id, learner_id, listing_id, slot_id, pricing_plan_id, provider_id,
     status, session_start, session_end)
VALUES
    ('00000000-0000-0000-0000-000000000070',
     '00000000-0000-0000-0000-000000000012',
     '00000000-0000-0000-0000-000000000040',
     '00000000-0000-0000-0000-000000000060',
     '00000000-0000-0000-0000-000000000050',
     '00000000-0000-0000-0000-000000000011',
     'completed',
     '2026-06-02 06:30:00+05:30',
     '2026-06-02 07:30:00+05:30');

-- Meera books the free carnatic trial
INSERT INTO bookings
    (id, learner_id, listing_id, slot_id, pricing_plan_id, provider_id,
     status, session_start, session_end)
VALUES
    ('00000000-0000-0000-0000-000000000071',
     '00000000-0000-0000-0000-000000000013',
     '00000000-0000-0000-0000-000000000041',
     '00000000-0000-0000-0000-000000000063',
     '00000000-0000-0000-0000-000000000054',
     '00000000-0000-0000-0000-000000000013',
     'confirmed',
     '2026-06-07 10:00:00+05:30',
     '2026-06-07 10:45:00+05:30');

-- ---------------------------------------------------------------------------
-- 12. PAYMENTS
-- ---------------------------------------------------------------------------
INSERT INTO payments
    (id, booking_id, payer_id, payee_id,
     amount, platform_fee, provider_amount, tax_amount,
     payment_method, status,
     gateway_name, gateway_order_id, gateway_payment_id,
     succeeded_at)
VALUES
    ('00000000-0000-0000-0000-000000000080',
     '00000000-0000-0000-0000-000000000070',
     '00000000-0000-0000-0000-000000000012',
     '00000000-0000-0000-0000-000000000011',
     299.00, 29.90, 269.10, 0.00,
     'upi', 'succeeded',
     'razorpay', 'order_RZP001', 'pay_RZP001XYZ',
     NOW() - INTERVAL '2 days');

-- Free session — no payment gateway, zero amount
INSERT INTO payments
    (id, booking_id, payer_id, payee_id,
     amount, platform_fee, provider_amount, tax_amount,
     payment_method, status)
VALUES
    ('00000000-0000-0000-0000-000000000081',
     '00000000-0000-0000-0000-000000000071',
     '00000000-0000-0000-0000-000000000013',
     '00000000-0000-0000-0000-000000000013',
     0.00, 0.00, 0.00, 0.00,
     'skill_exchange', 'succeeded');

-- ---------------------------------------------------------------------------
-- 13. REVIEWS  (only for the completed booking)
-- ---------------------------------------------------------------------------
INSERT INTO reviews
    (booking_id, reviewer_id, reviewee_id, listing_id,
     target, rating, title, body)
VALUES
    ('00000000-0000-0000-0000-000000000070',
     '00000000-0000-0000-0000-000000000012',
     '00000000-0000-0000-0000-000000000011',
     '00000000-0000-0000-0000-000000000040',
     'listing', 5,
     'Fantastic start to the morning!',
     'Priya is an incredibly patient and skilled instructor. '
     'The class was well-paced and I left feeling energised. '
     'The clubhouse hall is clean and well-ventilated. Highly recommend!');

-- ---------------------------------------------------------------------------
-- 14. ADMIN ACTIONS
-- ---------------------------------------------------------------------------
INSERT INTO admin_actions
    (admin_id, action_type, target_type, target_id, notes, apartment_id)
VALUES
    ('00000000-0000-0000-0000-000000000010',
     'user_verified', 'user', '00000000-0000-0000-0000-000000000011',
     'Verified Priya Sharma – flat B-204 confirmed via society records.',
     '00000000-0000-0000-0000-000000000001'),

    ('00000000-0000-0000-0000-000000000010',
     'listing_approved', 'listing', '00000000-0000-0000-0000-000000000040',
     'Yoga listing approved after reviewing instructor certification.',
     '00000000-0000-0000-0000-000000000001'),

    ('00000000-0000-0000-0000-000000000010',
     'listing_approved', 'listing', '00000000-0000-0000-0000-000000000041',
     'Carnatic music listing approved.',
     '00000000-0000-0000-0000-000000000001');

-- ---------------------------------------------------------------------------
-- 15. NOTIFICATIONS
-- ---------------------------------------------------------------------------
INSERT INTO notifications
    (user_id, apartment_id, channel, status, event_key, title, body,
     reference_type, reference_id, sent_at, read_at)
VALUES
    ('00000000-0000-0000-0000-000000000012',
     '00000000-0000-0000-0000-000000000001',
     'in_app', 'sent',
     'booking.confirmed',
     'Booking Confirmed 🎉',
     'Your yoga session on Mon 2 Jun at 6:30 AM is confirmed! See you there.',
     'booking', '00000000-0000-0000-0000-000000000070',
     NOW() - INTERVAL '3 days', NOW() - INTERVAL '3 days');

COMMIT;
