import { db, COLLECTIONS, auth } from "../firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  deleteUser,
  User,
} from "firebase/auth";

interface VerificationRecord {
  timestamp: FirebaseFirestore.Timestamp;
  type: string;
  // ... other fields
}

export interface AdminUser {
  uid: string;
  email: string;
  displayName: string;
  role: "admin" | "staff";
  createdAt: Date;
  lastLogin?: Date;
}

export class AdminService {
  private static instance: AdminService;
  private usersCollection = collection(db, COLLECTIONS.USERS);

  private constructor() {
    this.initializeAdminUser();
  }

  public static getInstance(): AdminService {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService();
    }
    return AdminService.instance;
  }

  private async initializeAdminUser() {
    const adminEmail = "admin@votex.com";
    const adminPassword = "admin";

    try {
      // Check if admin user exists in Firestore
      const adminQuery = query(
        this.usersCollection,
        where("email", "==", adminEmail)
      );
      const adminDocs = await getDocs(adminQuery);

      if (adminDocs.empty) {
        // Create admin user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          adminEmail,
          adminPassword
        );
        const { user } = userCredential;

        // Store admin user in Firestore
        await this.createUserDocument(user.uid, {
          email: adminEmail,
          displayName: "Admin",
          role: "admin" as const,
          createdAt: new Date(),
        });

        console.log("Admin user created successfully");
      } else {
        console.log("Admin user already exists");
      }
    } catch (error) {
      console.error("Error initializing admin user:", error);
      throw error;
    }
  }

  private async createUserDocument(
    uid: string,
    userData: Omit<AdminUser, "uid">
  ) {
    const userRef = doc(this.usersCollection, uid);
    await setDoc(userRef, {
      ...userData,
      createdAt: Timestamp.fromDate(userData.createdAt),
    });
  }

  /**
   * Admin authentication
   */
  public async adminLogin(email: string, password: string): Promise<boolean> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdTokenResult();

      if (!token.claims.admin) {
        await signOut(auth);
        throw new Error("User is not an admin");
      }

      await this.logAdminAction("login", {
        admin: email,
        success: true,
      });

      return true;
    } catch (error: unknown) {
      await this.logAdminAction("login", {
        admin: email,
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
      throw new Error("Admin authentication failed");
    }
  }

  /**
   * Override voter verification
   */
  public async overrideVerification(
    voterId: string,
    reason: string,
    adminId: string
  ): Promise<void> {
    try {
      // Verify admin status
      const token = await auth.currentUser?.getIdTokenResult();
      if (!token?.claims.admin) {
        throw new Error("Unauthorized: Admin access required");
      }

      // Create override record
      await setDoc(
        doc(db, COLLECTIONS.ADMIN_OVERRIDES, `${voterId}_${Date.now()}`),
        {
          voterId,
          adminId,
          reason,
          timestamp: new Date(),
          type: "verification_override",
        }
      );

      // Update voter status
      await setDoc(
        doc(db, COLLECTIONS.VOTERS, voterId),
        {
          verificationOverride: true,
          overrideTimestamp: new Date(),
          overrideAdmin: adminId,
          overrideReason: reason,
        },
        { merge: true }
      );

      await this.logAdminAction("verification_override", {
        admin: adminId,
        voterId,
        reason,
        success: true,
      });
    } catch (error) {
      await this.logAdminAction("verification_override", {
        admin: adminId,
        voterId,
        reason,
        success: false,
        error: error.message,
      });
      throw new Error("Override failed: " + error.message);
    }
  }

  /**
   * Get voter verification history
   */
  public async getVoterHistory(voterId: string): Promise<any[]> {
    try {
      const token = await auth.currentUser?.getIdTokenResult();
      if (!token?.claims.admin) {
        throw new Error("Unauthorized: Admin access required");
      }

      const verificationQuery = query(
        collection(db, COLLECTIONS.VERIFICATIONS),
        where("voterId", "==", voterId)
      );
      const verificationDocs = await getDocs(verificationQuery);

      const overrideQuery = query(
        collection(db, COLLECTIONS.ADMIN_OVERRIDES),
        where("voterId", "==", voterId)
      );
      const overrideDocs = await getDocs(overrideQuery);

      const history = [
        ...verificationDocs.docs.map((doc) => ({
          ...doc.data(),
          type: "verification",
        })),
        ...overrideDocs.docs.map((doc) => ({
          ...doc.data(),
          type: "override",
        })),
      ].sort(
        (a: VerificationRecord, b: VerificationRecord) =>
          b.timestamp.toMillis() - a.timestamp.toMillis()
      );

      return history;
    } catch (error) {
      console.error("Error fetching voter history:", error);
      throw new Error("Failed to fetch voter history");
    }
  }

  /**
   * Log admin actions for audit
   */
  private async logAdminAction(action: string, details: any): Promise<void> {
    try {
      await setDoc(doc(db, COLLECTIONS.AUDIT_LOGS, `admin_${Date.now()}`), {
        type: "admin_action",
        action,
        ...details,
        timestamp: new Date(),
        ipAddress: await this.getClientIP(),
      });
    } catch (error) {
      console.error("Error logging admin action:", error);
    }
  }

  /**
   * Get client IP for audit logs
   */
  private async getClientIP(): Promise<string> {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return "unknown";
    }
  }

  public async createStaffUser(
    email: string,
    password: string,
    displayName: string
  ): Promise<AdminUser> {
    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Set user profile
      await updateProfile(userCredential.user, {
        displayName,
      });

      // Create user document
      const userData: AdminUser = {
        uid: userCredential.user.uid,
        email,
        displayName,
        role: "staff",
        createdAt: new Date(),
      };

      await setDoc(
        doc(db, COLLECTIONS.USERS, userCredential.user.uid),
        userData
      );

      return userData;
    } catch (error) {
      console.error("Error creating staff user:", error);
      throw error;
    }
  }

  public async getAllUsers(): Promise<AdminUser[]> {
    try {
      const usersSnapshot = await getDocs(collection(db, COLLECTIONS.USERS));
      return usersSnapshot.docs.map((doc) => ({
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
        lastLogin: doc.data().lastLogin?.toDate(),
      })) as AdminUser[];
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  public async deleteUser(uid: string): Promise<void> {
    try {
      await deleteDoc(doc(db, COLLECTIONS.USERS, uid));
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }

  public async updateUserRole(
    uid: string,
    role: "admin" | "staff"
  ): Promise<void> {
    try {
      await updateDoc(doc(db, COLLECTIONS.USERS, uid), { role });
    } catch (error) {
      console.error("Error updating user role:", error);
      throw error;
    }
  }
}

export default AdminService.getInstance();
