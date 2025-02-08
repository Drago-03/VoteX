export type VerificationLog = {
  id: string;
  verification_type: "face" | "fingerprint";
  status: "success" | "failed";
  error_message: string | null;
  timestamp: Date;
  voter_id?: string;
  staff_id?: string;
};
