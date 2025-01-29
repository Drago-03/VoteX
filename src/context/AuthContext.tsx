import React, { createContext, useContext, useState } from 'react';
import { AuthContextType, AuthState, UserProfile } from '../types/auth';

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: false,
    error: null,
  });

  const signIn = async (email: string, password: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement Firebase authentication
      console.log('Sign in with:', email, password);
      throw new Error('Firebase authentication not implemented');
    } catch (error) {
      setState(prev => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const signUp = async (data: Omit<UserProfile, 'id' | 'verified'>) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement Firebase authentication and user profile creation
      console.log('Sign up with:', data);
      throw new Error('Firebase authentication not implemented');
    } catch (error) {
      setState(prev => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const signOut = async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement Firebase sign out
      setState({ user: null, isLoading: false, error: null });
    } catch (error) {
      setState(prev => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const googleSignIn = async () => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    try {
      // TODO: Implement Firebase Google authentication
      console.log('Google sign in');
      throw new Error('Firebase Google authentication not implemented');
    } catch (error) {
      setState(prev => ({ ...prev, error: (error as Error).message }));
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, signIn, signUp, signOut, googleSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};