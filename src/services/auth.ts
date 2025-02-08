import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export type UserData = {
  email: string;
  firstName: string;
  lastName: string;
};

export async function signUp(
  email: string,
  password: string,
  firstName: string,
  lastName: string
): Promise<User> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Store additional user data in Firestore
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

export async function signIn(email: string, password: string): Promise<User> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    localStorage.setItem("loggedInUserId", userCredential.user.uid);
    return userCredential.user;
  } catch (error: any) {
    if (error.code === "auth/invalid-credential") {
      throw new Error("Incorrect email or password");
    }
    throw new Error("Account does not exist");
  }
}

export async function logOut(): Promise<void> {
  try {
    await signOut(auth);
    localStorage.removeItem("loggedInUserId");
  } catch (error) {
    throw new Error("Error signing out");
  }
}

export function getCurrentUserId(): string | null {
  return localStorage.getItem("loggedInUserId");
}
