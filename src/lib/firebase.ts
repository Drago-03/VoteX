import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

// Firebase types
export interface Voter {
  id: string;
  aadhaarId: string;
  fullName: string;
  faceData: any;
  biometricData: any;
  electoralRollNumber: string;
  regionCode: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VerificationLog {
  id: string;
  voterId: string;
  verificationType: 'face' | 'fingerprint';
  status: 'success' | 'failed';
  errorMessage?: string;
  verifiedByStaff: boolean;
  staffId?: string;
  createdAt: Date;
}

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export { firebase };
