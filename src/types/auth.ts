export interface UserProfile {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  panCard: string;
  verified: boolean;
}

export interface AuthState {
  user: UserProfile | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (data: Omit<UserProfile, 'id' | 'verified'>) => Promise<void>;
  signOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
}