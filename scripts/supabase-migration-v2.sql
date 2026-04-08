-- =============================================================
-- AMSC Performance — Database Migration v2
-- =============================================================

-- 1. Add application status column
ALTER TABLE clients
ADD COLUMN IF NOT EXISTS application_status TEXT DEFAULT 'pending_review'
CHECK (application_status IN ('pending_review', 'approved', 'declined'));

-- 2. Add approval token (unique, used in payment link URL)
ALTER TABLE clients
ADD COLUMN IF NOT EXISTS approval_token TEXT UNIQUE;

-- 3. Index on approval_token for fast lookups
CREATE INDEX IF NOT EXISTS idx_clients_approval_token ON clients (approval_token);

-- 4. Index on application_status for filtering
CREATE INDEX IF NOT EXISTS idx_clients_application_status ON clients (application_status);

-- 5. Drop the old view first, then recreate with new columns
DROP VIEW IF EXISTS client_summary;

CREATE VIEW client_summary AS
SELECT
  id,
  full_name,
  email,
  phone,
  sport,
  training_goals,
  availability,
  health_info,
  selected_plan,
  plan_price,
  application_status,
  approval_token,
  payment_status,
  payment_provider,
  trainerize_invited,
  notes,
  created_at
FROM clients
ORDER BY created_at DESC;
