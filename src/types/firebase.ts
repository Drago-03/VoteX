/**
 * Firebase Types
 * This file contains TypeScript type definitions for Firebase-related data structures.
 * These types ensure type safety when working with Firebase data throughout the application.
 */

import { User as FirebaseUser } from "firebase/auth";

/**
 * Extended User Type
 * Extends the base Firebase User type with additional application-specific properties
 */
export interface User extends FirebaseUser {
  roles?: string[];
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  createdAt?: string;
  lastLogin?: string;
}

/**
 * Verification Log Type
 * Represents a single voter verification attempt record in the database.
 */
export interface VerificationLog {
  id: string;
  verification_type: "face" | "fingerprint";
  status: "success" | "failed";
  error_message: string | null;
  timestamp: Date;
  voter_id?: string;
  staff_id?: string;
}

/**
 * Voter Type
 * Represents a registered voter in the system
 */
export interface Voter {
  id: string;
  full_name: string;
  aadhaar_id: string;
  electoral_roll_number: string;
  region_code: string;
  created_at: string;
  verification_status?: "verified" | "pending" | "rejected";
  last_verification_attempt?: Date;
}

/**
 * Staff Member Type
 * Represents a staff member with administrative privileges
 */
export interface StaffMember {
  id: string;
  email: string;
  roles: string[];
  full_name: string;
  created_at: string;
  last_active?: Date;
  status: "active" | "inactive" | "suspended";
}
