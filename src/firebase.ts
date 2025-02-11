/**
 * Firebase Configuration and Initialization
 * This file sets up the connection to Firebase services (Authentication, Firestore, Functions).
 * It validates environment variables and initializes Firebase with the correct configuration.
 */

import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  Firestore,
  enableIndexedDbPersistence,
} from "firebase/firestore";
import { getFunctions, Functions } from "firebase/functions";

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

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

class FirebaseService {
  private static instance: FirebaseService;
  private app: FirebaseApp;
  private _auth: Auth;
  private _db: Firestore;
  private _functions: Functions;
  private connectionState: "connected" | "disconnected" = "disconnected";

  private constructor() {
    this.initializeWithRetry();
  }

  public static getInstance(): FirebaseService {
    if (!FirebaseService.instance) {
      FirebaseService.instance = new FirebaseService();
    }
    return FirebaseService.instance;
  }

  private async initializeWithRetry(retryCount = 0): Promise<void> {
    try {
      this.app = initializeApp(firebaseConfig);
      this._auth = getAuth(this.app);
      this._db = getFirestore(this.app);
      this._functions = getFunctions(this.app);

      // Enable offline persistence
      await enableIndexedDbPersistence(this._db).catch((err) => {
        if (err.code === "failed-precondition") {
          console.warn(
            "Multiple tabs open, persistence can only be enabled in one tab at a time."
          );
        } else if (err.code === "unimplemented") {
          console.warn("The current browser does not support persistence.");
        }
      });

      // Monitor auth state
      onAuthStateChanged(this._auth, (user) => {
        console.log("Auth state changed:", user ? "logged in" : "logged out");
      });

      // Monitor connection state
      const connectedRef = this._db.collection("_connection").doc("status");
      connectedRef.onSnapshot((snap) => {
        this.connectionState = snap.data()?.isConnected
          ? "connected"
          : "disconnected";
        console.log("Connection state:", this.connectionState);
      });

      console.log("Firebase initialized successfully");
    } catch (error) {
      console.error(
        `Firebase initialization attempt ${retryCount + 1} failed:`,
        error
      );

      if (retryCount < MAX_RETRIES) {
        await new Promise((resolve) =>
          setTimeout(resolve, RETRY_DELAY * (retryCount + 1))
        );
        await this.initializeWithRetry(retryCount + 1);
      } else {
        throw new Error(
          `Failed to initialize Firebase after ${MAX_RETRIES} attempts`
        );
      }
    }
  }

  public get auth(): Auth {
    return this._auth;
  }

  public get db(): Firestore {
    return this._db;
  }

  public get functions(): Functions {
    return this._functions;
  }

  public isConnected(): boolean {
    return this.connectionState === "connected";
  }
}

const firebaseService = FirebaseService.getInstance();

export const auth = firebaseService.auth;
export const db = firebaseService.db;
export const functions = firebaseService.functions;
export const isConnected = () => firebaseService.isConnected();

export default firebaseService;
