-- =============================================================
-- AMSC Performance — Supabase Database Setup
-- =============================================================
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New Query)
--
-- WHAT THIS DOES:
-- 1. Creates a 'clients' table to store signup data
-- 2. Enables Row Level Security (RLS) so NO ONE can access data
--    from the browser — only your server (API routes) can read/write
-- 3. Creates an index on email for fast lookups
-- 4. Auto-updates the 'updated_at' timestamp on changes
--
-- SECURITY MODEL:
-- - RLS is ON with ZERO public policies = no browser access at all
-- - Only the service_role key (used in your API routes) bypasses RLS
-- - The service_role key is NEVER exposed to the browser
-- =============================================================

-- 1. Create the clients table
CREATE TABLE IF NOT EXISTS clients (
  id              UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name       TEXT NOT NULL,
  email           TEXT NOT NULL,
  phone           TEXT NOT NULL,
  sport           TEXT,
  training_goals  TEXT,
  availability    TEXT,
  health_info     TEXT,
  selected_plan   TEXT NOT NULL,
  plan_price      INTEGER NOT NULL,
  payment_status  TEXT DEFAULT 'pending'
                  CHECK (payment_status IN ('pending', 'paid', 'failed', 'expired')),
  payment_provider TEXT
                  CHECK (payment_provider IN ('intasend', 'paystack', NULL)),
  payment_reference TEXT,
  trainerize_invited BOOLEAN DEFAULT FALSE,
  notes           TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  updated_at      TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Enable Row Level Security (blocks ALL public/anon access)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- No policies = no public access. Only service_role can touch this table.
-- This is the MOST secure configuration possible.

-- 3. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_clients_email ON clients (email);
CREATE INDEX IF NOT EXISTS idx_clients_payment_status ON clients (payment_status);
CREATE INDEX IF NOT EXISTS idx_clients_created_at ON clients (created_at DESC);

-- 4. Auto-update the updated_at timestamp on any row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON clients
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at();

-- =============================================================
-- OPTIONAL: Create a view for the admin dashboard
-- This gives you a clean summary in the Supabase Table Editor
-- =============================================================
CREATE OR REPLACE VIEW client_summary AS
SELECT
  id,
  full_name,
  email,
  phone,
  selected_plan,
  plan_price,
  payment_status,
  payment_provider,
  trainerize_invited,
  created_at
FROM clients
ORDER BY created_at DESC;

-- =============================================================
-- DONE! Your database is ready.
--
-- NEXT STEPS:
-- 1. Copy your Supabase URL and Service Role Key from:
--    Dashboard → Settings → API
-- 2. Add them to your .env.local file
-- 3. NEVER share the Service Role Key with anyone
-- =============================================================
