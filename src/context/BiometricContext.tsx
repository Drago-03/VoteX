import React, { createContext, useContext, useState } from 'react';
import BiometricAuthService from '../services/BiometricAuthService';

interface BiometricContextType {
  isAuthenticated: boolean;
  isProcessing: boolean;
  currentStep: number;
  verificationMethod: 'touchid' | 'faceid' | 'voice' | null;
  startVerification: () => Promise<void>;
  resetVerification: () => void;
}

const BiometricContext = createContext<BiometricContextType | undefined>(undefined);

export const BiometricProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [verificationMethod, setVerificationMethod] = useState<'touchid' | 'faceid' | 'voice' | null>(null);

  const startVerification = async () => {
    // Implementation
  };

  const resetVerification = () => {
    // Implementation
  };

  return (
    <BiometricContext.Provider value={{
      isAuthenticated,
      isProcessing,
      currentStep,
      verificationMethod,
      startVerification,
      resetVerification
    }}>
      {children}
    </BiometricContext.Provider>
  );
};

export const useBiometricContext = () => {
  const context = useContext(BiometricContext);
  if (undefined === context) {
    throw new Error('useBiometricContext must be used within BiometricProvider');
  }
  return context;
};
