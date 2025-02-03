/*
  # VoteX Database Schema

  1. New Tables
    - `voters`
      - `id` (uuid, primary key)
      - `aadhaar_id` (text, unique) - Aadhaar card number
      - `full_name` (text)
      - `face_data` (jsonb) - Facial recognition data
      - `biometric_data` (jsonb) - Fingerprint data
      - `electoral_roll_number` (text)
      - `region_code` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `verification_logs`
      - `id` (uuid, primary key)
      - `voter_id` (uuid, references voters)
      - `verification_type` (text) - 'face' or 'fingerprint'
      - `status` (text) - 'success' or 'failed'
      - `error_message` (text)
      - `verified_by_staff` (boolean)
      - `staff_id` (uuid, references auth.users)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for staff access
*/

-- Create voters table
CREATE TABLE IF NOT EXISTS voters (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  aadhaar_id text UNIQUE NOT NULL,
  full_name text NOT NULL,
  face_data jsonb,
  biometric_data jsonb,
  electoral_roll_number text NOT NULL,
  region_code text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create verification_logs table
CREATE TABLE IF NOT EXISTS verification_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  voter_id uuid REFERENCES voters(id),
  verification_type text NOT NULL CHECK (verification_type IN ('face', 'fingerprint')),
  status text NOT NULL CHECK (status IN ('success', 'failed')),
  error_message text,
  verified_by_staff boolean DEFAULT false,
  staff_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE voters ENABLE ROW LEVEL SECURITY;
ALTER TABLE verification_logs ENABLE ROW LEVEL SECURITY;

-- Create policies for voters table
CREATE POLICY "Staff can read all voters"
  ON voters
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Staff can insert voters"
  ON voters
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Staff can update voters"
  ON voters
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create policies for verification_logs table
CREATE POLICY "Staff can read all verification logs"
  ON verification_logs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Staff can insert verification logs"
  ON verification_logs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Create function to update voter's updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_voters_updated_at
  BEFORE UPDATE ON voters
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();