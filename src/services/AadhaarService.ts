import { db, COLLECTIONS } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

export class AadhaarService {
  private static instance: AadhaarService;
  private functions = getFunctions();

  private constructor() {}

  public static getInstance(): AadhaarService {
    if (!AadhaarService.instance) {
      AadhaarService.instance = new AadhaarService();
    }
    return AadhaarService.instance;
  }

  /**
   * Verify Aadhaar details using UIDAI API
   * This will be called through a Firebase Cloud Function to keep the API key secure
   */
  public async verifyAadhaar(
    aadhaarNumber: string,
    voterId: string
  ): Promise<boolean> {
    try {
      const verifyAadhaarFunction = httpsCallable(
        this.functions,
        "verifyAadhaar"
      );
      const result = await verifyAadhaarFunction({ aadhaarNumber });

      // Log the verification attempt
      await this.logVerificationAttempt(
        aadhaarNumber,
        voterId,
        result.data as any
      );

      return (result.data as any).success;
    } catch (error: unknown) {
      console.error("Aadhaar verification error:", error);
      await this.logVerificationAttempt(aadhaarNumber, voterId, {
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      });
      throw new Error("Aadhaar verification failed");
    }
  }

  /**
   * Log Aadhaar verification attempts for audit
   */
  private async logVerificationAttempt(
    aadhaarNumber: string,
    voterId: string,
    result: any
  ): Promise<void> {
    const maskedAadhaar = this.maskAadhaarNumber(aadhaarNumber);

    await setDoc(doc(db, COLLECTIONS.AUDIT_LOGS, `aadhaar_${Date.now()}`), {
      type: "aadhaar_verification",
      voterId,
      maskedAadhaar,
      success: result.success || false,
      error: result.error || null,
      timestamp: new Date(),
    });
  }

  /**
   * Mask Aadhaar number for security
   */
  private maskAadhaarNumber(aadhaarNumber: string): string {
    return `XXXX-XXXX-${aadhaarNumber.slice(-4)}`;
  }
}

export default AadhaarService.getInstance();
