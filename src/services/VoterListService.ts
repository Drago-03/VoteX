import { db, COLLECTIONS } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  query,
  where,
  getDocs,
  collection,
  updateDoc,
  arrayUnion,
  Timestamp,
} from "firebase/firestore";

export interface VoterRecord {
  voterId: string;
  aadhaarId: string;
  name: string;
  fatherName: string;
  dateOfBirth: Timestamp;
  gender: "male" | "female" | "other";
  address: {
    street: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
  };
  constituency: string;
  pollingStation: string;
  photo: string;
  isRegistered: boolean;
  registrationDate: Timestamp;
  lastVerified: Timestamp | null;
  verificationHistory: {
    timestamp: Timestamp;
    type: "registration" | "verification" | "update";
    status: "success" | "failed";
    details?: string;
  }[];
}

export class VoterListService {
  private static instance: VoterListService;

  private constructor() {}

  public static getInstance(): VoterListService {
    if (!VoterListService.instance) {
      VoterListService.instance = new VoterListService();
    }
    return VoterListService.instance;
  }

  /**
   * Get voter details by Voter ID
   */
  public async getVoterById(voterId: string): Promise<VoterRecord | null> {
    try {
      const voterDoc = await getDoc(doc(db, COLLECTIONS.VOTERS, voterId));

      if (!voterDoc.exists()) {
        return null;
      }

      return voterDoc.data() as VoterRecord;
    } catch (error) {
      console.error("Error fetching voter details:", error);
      throw new Error("Failed to fetch voter details");
    }
  }

  /**
   * Get voter details by Aadhaar ID
   */
  public async getVoterByAadhaar(
    aadhaarId: string
  ): Promise<VoterRecord | null> {
    try {
      const votersRef = collection(db, COLLECTIONS.VOTERS);
      const q = query(votersRef, where("aadhaarId", "==", aadhaarId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return null;
      }

      return querySnapshot.docs[0].data() as VoterRecord;
    } catch (error) {
      console.error("Error fetching voter by Aadhaar:", error);
      throw new Error("Failed to fetch voter by Aadhaar");
    }
  }

  /**
   * Register a new voter
   */
  public async registerVoter(
    voterData: Omit<
      VoterRecord,
      "registrationDate" | "lastVerified" | "verificationHistory"
    >
  ): Promise<string> {
    try {
      // Check if voter already exists
      const existingVoter = await this.getVoterById(voterData.voterId);
      if (existingVoter) {
        throw new Error("Voter ID already registered");
      }

      // Check if Aadhaar is already registered
      const existingAadhaar = await this.getVoterByAadhaar(voterData.aadhaarId);
      if (existingAadhaar) {
        throw new Error("Aadhaar already registered with another Voter ID");
      }

      const newVoter: VoterRecord = {
        ...voterData,
        registrationDate: Timestamp.now(),
        lastVerified: null,
        verificationHistory: [
          {
            timestamp: Timestamp.now(),
            type: "registration",
            status: "success",
          },
        ],
      };

      await setDoc(doc(db, COLLECTIONS.VOTERS, voterData.voterId), newVoter);

      // Log registration
      await this.logVoterAction(voterData.voterId, "registration", "success");

      return voterData.voterId;
    } catch (error: unknown) {
      console.error("Error registering voter:", error);
      await this.logVoterAction(
        voterData.voterId,
        "registration",
        "failed",
        error instanceof Error ? error.message : "Unknown error occurred"
      );
      throw new Error("Voter registration failed");
    }
  }

  /**
   * Update voter verification status
   */
  public async updateVerificationStatus(
    voterId: string,
    status: "success" | "failed",
    details?: string
  ): Promise<void> {
    try {
      const voterRef = doc(db, COLLECTIONS.VOTERS, voterId);

      await updateDoc(voterRef, {
        lastVerified: Timestamp.now(),
        verificationHistory: arrayUnion({
          timestamp: Timestamp.now(),
          type: "verification",
          status,
          details,
        }),
      });

      await this.logVoterAction(voterId, "verification", status, details);
    } catch (error) {
      console.error("Error updating verification status:", error);
      throw new Error("Failed to update verification status");
    }
  }

  /**
   * Get voters by constituency
   */
  public async getVotersByConstituency(
    constituency: string
  ): Promise<VoterRecord[]> {
    try {
      const votersRef = collection(db, COLLECTIONS.VOTERS);
      const q = query(votersRef, where("constituency", "==", constituency));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map((doc) => doc.data() as VoterRecord);
    } catch (error) {
      console.error("Error fetching voters by constituency:", error);
      throw new Error("Failed to fetch voters by constituency");
    }
  }

  /**
   * Log voter-related actions
   */
  private async logVoterAction(
    voterId: string,
    action: string,
    status: "success" | "failed",
    details?: string
  ): Promise<void> {
    try {
      await setDoc(doc(db, COLLECTIONS.AUDIT_LOGS, `voter_${Date.now()}`), {
        type: "voter_action",
        voterId,
        action,
        status,
        details,
        timestamp: Timestamp.now(),
      });
    } catch (error) {
      console.error("Error logging voter action:", error);
    }
  }
}

export default VoterListService.getInstance();
