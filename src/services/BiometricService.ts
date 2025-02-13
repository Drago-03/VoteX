import { db, COLLECTIONS } from "../firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export class BiometricService {
  private static instance: BiometricService;

  private constructor() {}

  public static getInstance(): BiometricService {
    if (!BiometricService.instance) {
      BiometricService.instance = new BiometricService();
    }
    return BiometricService.instance;
  }

  /**
   * Check if biometric authentication is available
   */
  public async isBiometricAvailable(): Promise<boolean> {
    try {
      return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    } catch (error) {
      console.error("Error checking biometric availability:", error);
      return false;
    }
  }

  /**
   * Register biometric credentials for a voter
   */
  public async registerBiometric(voterId: string): Promise<boolean> {
    try {
      const challenge = this.generateChallenge();
      const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions =
        {
          challenge,
          rp: {
            name: "VoteX",
            id: window.location.hostname,
          },
          user: {
            id: Uint8Array.from(voterId, (c) => c.charCodeAt(0)),
            name: voterId,
            displayName: voterId,
          },
          pubKeyCredParams: [
            { type: "public-key", alg: -7 }, // ES256
            { type: "public-key", alg: -257 }, // RS256
          ],
          authenticatorSelection: {
            authenticatorAttachment: "platform",
            requireResidentKey: false,
            userVerification: "required",
          },
          timeout: 60000,
          attestation: "direct",
        };

      const credential = await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions,
      });

      if (credential) {
        // Store credential ID in Firestore
        await setDoc(doc(db, COLLECTIONS.BIOMETRIC_DATA, voterId), {
          credentialId: (credential as any).id,
          timestamp: new Date(),
          type: "registration",
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error registering biometric:", error);
      throw new Error("Biometric registration failed");
    }
  }

  /**
   * Verify biometric credentials for a voter
   */
  public async verifyBiometric(voterId: string): Promise<boolean> {
    try {
      const challenge = this.generateChallenge();
      const credentialDoc = await getDoc(
        doc(db, COLLECTIONS.BIOMETRIC_DATA, voterId)
      );

      if (!credentialDoc.exists()) {
        throw new Error("No registered biometric credentials found");
      }

      const publicKeyCredentialRequestOptions: PublicKeyCredentialRequestOptions =
        {
          challenge,
          timeout: 60000,
          userVerification: "required",
          rpId: window.location.hostname,
        };

      const assertion = await navigator.credentials.get({
        publicKey: publicKeyCredentialRequestOptions,
      });

      if (assertion) {
        // Log successful verification
        await updateDoc(doc(db, COLLECTIONS.BIOMETRIC_DATA, voterId), {
          lastVerification: new Date(),
          verificationSuccess: true,
        });
        return true;
      }
      return false;
    } catch (error: unknown) {
      if (error instanceof Error) {
        await updateDoc(doc(db, COLLECTIONS.BIOMETRIC_DATA, voterId), {
          lastVerification: new Date(),
          verificationSuccess: false,
          error: error.message,
        });
      }
      throw new Error("Biometric verification failed");
    }
  }

  /**
   * Generate a random challenge for WebAuthn
   */
  private generateChallenge(): Uint8Array {
    return crypto.getRandomValues(new Uint8Array(32));
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
