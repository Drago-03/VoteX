/**
 * Firebase Types
 * This file contains TypeScript type definitions for Firebase-related data structures.
 * These types ensure type safety when working with Firebase data throughout the application.
 */

/**
 * Verification Log Type
 * Represents a single voter verification attempt record in the database.
 */
export type VerificationLog = {
  id: string; // Unique identifier for the log entry
  verification_type: "face" | "fingerprint"; // Method used for verification
  status: "success" | "failed"; // Outcome of the verification attempt
  error_message: string | null; // Error details if verification failed
  timestamp: Date; // When the verification was attempted
  voter_id?: string; // Optional reference to the voter
  staff_id?: string; // Optional reference to staff member who assisted
};
