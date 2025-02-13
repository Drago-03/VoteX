import { db, COLLECTIONS } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export class BiometricService {
  private static instance: BiometricService;
  private isInitialized: boolean = false;

  private constructor() {
    this.initialize();
  }

  public static getInstance(): BiometricService {
    if (!BiometricService.instance) {
      BiometricService.instance = new BiometricService();
    }
    return BiometricService.instance;
  }

  private async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Check if the browser supports biometric authentication
      if (!window.PublicKeyCredential) {
        throw new Error(
          "Biometric authentication is not supported in this browser"
        );
      }

      const available =
        await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
      if (!available) {
        throw new Error("No biometric authenticator available");
      }

      this.isInitialized = true;
    } catch (error) {
      console.error("Failed to initialize biometric service:", error);
      throw error;
    }
  }

  public async captureBiometric(): Promise<string> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      // Create challenge for biometric authentication
      const challenge = new Uint8Array(32);
      window.crypto.getRandomValues(challenge);

      // Request biometric data
      const credential = await navigator.credentials.create({
        publicKey: {
          challenge,
          rp: {
            name: "VoteX",
            id: window.location.hostname,
          },
          user: {
            id: Uint8Array.from("TEMP_USER_ID", (c) => c.charCodeAt(0)),
            name: "Temporary User",
            displayName: "Voter",
          },
          pubKeyCredParams: [
            { type: "public-key", alg: -7 }, // ES256
            { type: "public-key", alg: -257 }, // RS256
          ],
          authenticatorSelection: {
            authenticatorAttachment: "platform",
            userVerification: "required",
          },
          timeout: 60000,
          attestation: "direct",
        },
      });

      if (!credential) {
        throw new Error("No biometric credential received");
      }

      // Convert credential to string format
      const credentialString = this.credentialToString(credential);

      return credentialString;
    } catch (error) {
      console.error("Failed to capture biometric:", error);
      throw new Error(
        error instanceof Error ? error.message : "Failed to capture biometric"
      );
    }
  }

  private credentialToString(credential: Credential): string {
    // Convert the credential to a string format that can be sent to the server
    // This is a simplified version - in production, you'd want to properly serialize
    // the credential data including the attestation
    return btoa(
      JSON.stringify({
        id: credential.id,
        type: credential.type,
        timestamp: new Date().toISOString(),
      })
    );
  }

  public async verifyBiometric(
    voterId: string,
    biometricData: string
  ): Promise<boolean> {
    try {
      // In a real implementation, this would verify the biometric data
      // against a stored template, possibly using a third-party service

      // For demo purposes, we'll simulate a successful verification
      await updateDoc(doc(db, COLLECTIONS.BIOMETRIC_DATA, voterId), {
        lastVerification: new Date(),
        verificationSuccess: true,
      });

      return true;
    } catch (error) {
      console.error("Biometric verification failed:", error);
      throw new Error("Biometric verification failed");
    }
  }

  /**
   * Handle hardware errors and retries
   */
  public async handleHardwareError(
    error: Error,
    voterId: string
  ): Promise<void> {
    await setDoc(doc(db, COLLECTIONS.AUDIT_LOGS, `${voterId}_${Date.now()}`), {
      type: "hardware_error",
      voterId,
      error: error.message,
      timestamp: new Date(),
      component: "biometric",
    });

    // Throw a user-friendly error
    throw new Error(
      "Hardware error occurred. Please try again or contact support."
    );
  }
}

export default BiometricService.getInstance();
