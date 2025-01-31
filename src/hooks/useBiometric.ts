import { useState, useCallback } from 'react';
import BiometricAuthService from '../services/BiometricAuthService';
import FacialRecognitionService from '../services/FacialRecognitionService';
import VoiceCommandService from '../services/VoiceCommandService';

export const useBiometric = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<string>('');
  
  const startVerification = useCallback(async () => {
    setIsVerifying(true);
    try {
      const biometricAuth = await BiometricAuthService.getInstance();
      const touchIdResult = await biometricAuth.authenticateWithTouchID();
      
      if (touchIdResult.success) {
        setVerificationStatus('success');
        return true;
      }
      
      setVerificationStatus('failed');
      return false;
    } catch (error) {
      setVerificationStatus('error');
      return false;
    } finally {
      setIsVerifying(false);
    }
  }, []);

  return {
    isVerifying,
    verificationStatus,
    startVerification
  };
};
