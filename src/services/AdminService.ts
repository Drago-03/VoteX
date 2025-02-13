import { db, COLLECTIONS, auth } from "../firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

interface VerificationRecord {
  timestamp: FirebaseFirestore.Timestamp;
  type: string;
  // ... other fields
}

export class AdminService {
  private static instance: AdminService;

  private constructor() {}

  public static getInstance(): AdminService {
    if (!AdminService.instance) {
      AdminService.instance = new AdminService();
    }
    return AdminService.instance;
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
}

export default AdminService.getInstance();
