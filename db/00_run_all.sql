-- =============================================================================
-- FILE: 00_run_all.sql
-- PURPOSE: Master script to run the entire schema in the correct dependency
--          order. Execute this file against a fresh PostgreSQL database.
--
-- Usage (psql):
--   psql -U postgres -d your_db_name -f db/00_run_all.sql
--
-- Usage (Supabase SQL Editor):
--   Paste and run each file in order, or use the Supabase CLI:
--   supabase db push (after placing files in supabase/migrations/)
-- =============================================================================

-- Requires pgcrypto for gen_random_uuid() on PostgreSQL < 14
-- On PG 14+ gen_random_uuid() is built-in; this is a safe no-op if already loaded.
CREATE EXTENSION IF NOT EXISTS pgcrypto;

\echo '--- 00: Creating ENUM types ---'
\i db/00_enums.sql

\echo '--- 01: Creating core tables (apartments, users, roles, profiles) ---'
\i db/01_core_tables.sql

\echo '--- 02: Creating listing tables (categories, listings, pricing, slots) ---'
\i db/02_listings_tables.sql

\echo '--- 03: Creating booking and payment tables ---'
\i db/03_bookings_payments.sql

\echo '--- 04: Creating reviews and messages tables ---'
\i db/04_reviews_messages.sql

\echo '--- 05: Creating admin moderation and dispute tables ---'
\i db/05_admin_moderation.sql

\echo '--- 06: Creating notification tables ---'
\i db/06_notifications.sql

\echo '--- 07: Creating triggers and functions ---'
\i db/07_triggers_functions.sql

\echo '--- 08: Inserting seed data ---'
\i db/08_seed_data.sql

\echo '=== Schema complete. Run db/09_example_queries.sql to test. ==='
