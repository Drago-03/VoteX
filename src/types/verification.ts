export interface VoterVerificationProps {
  onVerificationComplete?: (success: boolean) => void;
}

export type VerificationStatus =
  | "idle"
  | "processing"
  | "success"
  | "failed"
  | "listening";

export interface VerificationState {
  isHumanDetected: boolean;
  isCameraReady: boolean;
  isPhotoTaken: boolean;
  isFingerPrintScanned: boolean;
  isAadhaarVerified: boolean;
  isVoterIdConfirmed: boolean;
  isVoterListVerified: boolean;
  photoUrl: string | null;
  fingerPrintData: string | null;
  voterDetails: {
    voterId: string;
    name: string;
    fatherName: string;
    address: string;
    constituency: string;
  } | null;
  error: string | null;
}
