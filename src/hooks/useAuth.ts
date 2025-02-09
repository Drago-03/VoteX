/**
 * Authentication Hook
 * Custom React hook that manages user authentication state.
 * Provides real-time updates on user authentication status and loading state.
 */

import { useState, useEffect, useCallback } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import type { User } from "../types/firebase";

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
}

/**
 * useAuth Hook
 * Manages authentication state and provides authentication-related utilities.
 */
export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
    error: null,
  });

  // Fetch user roles and additional data from Firestore
  const fetchUserData = useCallback(async (userId: string) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        return userDoc.data() as Partial<User>;
      }
      return null;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          // Fetch additional user data from Firestore
          const userData = await fetchUserData(firebaseUser.uid);

          // Combine Firebase user with additional data
          const user: User = {
            ...firebaseUser,
            roles: userData?.roles || [],
            createdAt: userData?.createdAt,
            lastLogin: new Date().toISOString(),
          };

          setState({
            user,
            isLoading: false,
            isAuthenticated: true,
            error: null,
          });
        } else {
          setState({
            user: null,
            isLoading: false,
            isAuthenticated: false,
            error: null,
          });
        }
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error as Error,
        }));
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [fetchUserData]);

  return {
    ...state,
    // Helper method to check if user has a specific role
    hasRole: useCallback(
      (role: string) => {
        return state.user?.roles?.includes(role) || false;
      },
      [state.user]
    ),
    // Helper method to check if user has any of the specified roles
    hasAnyRole: useCallback(
      (roles: string[]) => {
        return roles.some((role) => state.user?.roles?.includes(role)) || false;
      },
      [state.user]
    ),
  };
}
