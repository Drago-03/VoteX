/**
 * Firebase Configuration and Initialization
 * This file sets up the connection to Firebase services (Authentication, Firestore, Functions).
 * It validates environment variables and initializes Firebase with the correct configuration.
 */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

/**
 * Required Environment Variables Check
 * Ensures all necessary Firebase configuration values are present before initialization.
 * This prevents runtime errors due to missing configuration.
 */
const requiredEnvVars = [
  "VITE_FIREBASE_API_KEY", // API key for Firebase project
  "VITE_FIREBASE_AUTH_DOMAIN", // Authentication domain
  "VITE_FIREBASE_PROJECT_ID", // Firebase project ID
  "VITE_FIREBASE_STORAGE_BUCKET", // Storage bucket for files
  "VITE_FIREBASE_MESSAGING_SENDER_ID", // Messaging sender ID
  "VITE_FIREBASE_APP_ID", // Firebase application ID
] as const;

// Validate all required environment variables are present
for (const envVar of requiredEnvVars) {
  if (!import.meta.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

/**
 * Firebase Configuration Object
 * Contains all necessary keys and endpoints for Firebase services.
 * Values are loaded from environment variables for security.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase with error handling
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Error initializing Firebase:", error);
  throw error;
}

// Export initialized Firebase services
export const auth = getAuth(app); // Authentication service
export const db = getFirestore(app); // Firestore database
export const functions = getFunctions(app); // Cloud Functions

export default app;
