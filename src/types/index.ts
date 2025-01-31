export interface VerificationStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'processing' | 'success' | 'error';
  confidence?: number;
}

export interface VerificationStats {
  totalProcessed: number;
  verified: number;
  rejected: number;
  pending: number;
}

export interface VerificationReport {
  sessionId: string;
  timestamp: string;
  steps: VerificationStep[];
  overallStatus: 'success' | 'failed';
  voterInfo: {
    id: string;
    name: string;
    district: string;
  };
}
