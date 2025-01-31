declare interface BiometricConfig {
  touchIdEnabled: boolean;
  faceIdEnabled: boolean;
  voiceEnabled: boolean;
  requiredFactors: number;
}

declare interface VerificationSession {
  id: string;
  timestamp: number;
  factors: string[];
  status: 'pending' | 'complete' | 'failed';
}

declare interface BiometricResult {
  success: boolean;
  factor: string;
  confidence: number;
  metadata?: Record<string, any>;
}
