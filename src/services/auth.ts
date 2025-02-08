/**
 * Authentication Service
 * This file contains all the functions related to user authentication.
 * It handles user registration, login, logout, and user data management.
 */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

/**
 * User Data Type
 * Defines the structure of additional user information stored in Firestore
 */
export type UserData = {
  email: string; // User's email address
  firstName: string; // User's first name
  lastName: string; // User's last name
};

/**
 * Sign Up Function
 * Creates a new user account and stores additional user information.
 *
 * @param email - User's email address
 * @param password - User's chosen password
 * @param firstName - User's first name
 * @param lastName - User's last name
 * @returns Promise containing the created user object
 * @throws Error if email already exists or creation fails
 */
export async function signUp(
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<User> {
  try {
    // Create authentication account
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Store additional user information in Firestore
    const userData: UserData = {
      email,
      firstName,
      lastName,
    };

    await setDoc(doc(db, "users", user.uid), userData);
    return user;
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      throw new Error("Email address already exists");
    }
    throw new Error("Unable to create user");
  }
}

/**
 * Sign In Function
 * Authenticates an existing user and manages their session.
 *
 * @param email - User's email address
 * @param password - User's password
 * @returns Promise containing the authenticated user object
 * @throws Error if credentials are invalid or account doesn't exist
 */
export async function signIn(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Store user ID in local storage for session management
    localStorage.setItem("loggedInUserId", userCredential.user.uid);
    return userCredential.user;
  } catch (error: any) {
    if (error.code === "auth/invalid-credential") {
      throw new Error("Incorrect email or password");
    }
    throw new Error("Account does not exist");
  }
}

/**
 * Log Out Function
 * Signs out the current user and clears their session.
 *
 * @throws Error if sign-out fails
 */
export async function logOut(): Promise<void> {
  try {
    await signOut(auth);
    localStorage.removeItem("loggedInUserId");
  } catch (error) {
    throw new Error("Error signing out");
  }
}

/**
 * Get Current User ID
 * Retrieves the ID of the currently logged-in user from local storage.
 *
 * @returns The user's ID if logged in, null otherwise
 */
export function getCurrentUserId(): string | null {
  return localStorage.getItem("loggedInUserId");
}
