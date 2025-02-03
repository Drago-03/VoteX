/*
  # Update verification logs RLS policies

  1. Changes
    - Add policy to allow public inserts into verification_logs table
    - Keep existing policies for authenticated users

  2. Security
    - Allow anonymous users to create verification logs
    - Maintain read protection for verification data
*/

-- Allow public inserts into verification_logs
CREATE POLICY "Allow public to insert verification logs"
  ON verification_logs
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Update existing policy to be more specific for staff reads
DROP POLICY IF EXISTS "Staff can read all verification logs" ON verification_logs;
CREATE POLICY "Staff can read all verification logs"
  ON verification_logs
  FOR SELECT
  TO authenticated
  USING (true);