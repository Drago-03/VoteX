/**
 * Authentication Hook
 * Custom React hook that manages user authentication state.
 * Provides real-time updates on user authentication status and loading state.
 */

import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

/**
 * useAuth Hook
 * Manages authentication state and provides authentication-related utilities.
 *
 * @returns {Object} Authentication state and utilities
 * @property {User | null} user - Current user object or null if not authenticated
 * @property {boolean} isLoading - Whether authentication state is being determined
 * @property {boolean} isAuthenticated - Whether a user is currently authenticated
 */
export function useAuth() {
  // Track the current user's authentication state
  const [user, setUser] = useState<User | null>(null);
  // Track whether we're still determining auth state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); // Update user state
      setIsLoading(false); // Mark loading as complete
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return {
    user, // The current user object
    isLoading, // Whether we're loading auth state
    isAuthenticated: !!user, // Whether user is authenticated
  };
}
