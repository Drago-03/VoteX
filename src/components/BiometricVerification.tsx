import React, { useEffect, useRef, useState } from 'react';
import BiometricAuthService from '../services/BiometricAuthService';
import VoiceCommandService from '../services/VoiceCommandService';

interface BiometricVerificationProps {
  onVerificationComplete: (success: boolean) => void;
}

export const BiometricVerification: React.FC<BiometricVerificationProps> = ({ onVerificationComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [verificationStatus, setVerificationStatus] = useState<string>('waiting');
  const biometricAuth = new BiometricAuthService();
  const voiceCommand = new VoiceCommandService();

  useEffect(() => {
    startVerificationProcess();
    return () => cleanup();
  }, []);

  const startVerificationProcess = async () => {
    try {
      // Start voice commands
      voiceCommand.startListening();
      
      // First try Touch ID
      const touchIdResult = await biometricAuth.authenticateWithTouchID();
      if (touchIdResult.success) {
        setVerificationStatus('touch_id_success');
        onVerificationComplete(true);
        return;
      }

      // If Touch ID fails, try facial recognition
      const stream = await biometricAuth.startFacialRecognition();
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        const faceResult = await biometricAuth.verifyFace(videoRef.current);
        if (faceResult.success) {
          setVerificationStatus('face_success');
          onVerificationComplete(true);
          return;
        }
      }
      
      setVerificationStatus('failed');
      onVerificationComplete(false);
    } catch (error) {
      console.error('Verification failed:', error);
      setVerificationStatus('error');
      onVerificationComplete(false);
    }
  };

  const cleanup = () => {
    biometricAuth.stopFacialRecognition();
    voiceCommand.stopListening();
  };

  return (
    <div className="biometric-container">
      <div className={`fingerprint-scanner ${verificationStatus === 'waiting' ? 'scanner-active' : ''}`} />
      <div className="face-scan-container">
        <video ref={videoRef} autoPlay playsInline muted />
        <div className="face-scan-overlay" />
      </div>
      <div className={`voice-indicator ${verificationStatus === 'waiting' ? 'voice-active' : ''}`} />
    </div>
  );
};
