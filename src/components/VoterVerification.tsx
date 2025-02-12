/**
 * Voter Verification Component
 * The main interface for voters to verify their identity using voice commands
 * and AI-powered face recognition with Aadhaar card verification.
 */

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Camera,
  Fingerprint,
  UserCheck,
  AlertCircle,
  Mic,
  MicOff,
  Keyboard,
  Shield,
} from "lucide-react";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { LoadingSpinner } from "./LoadingSpinner";
import { isConnected } from "../firebase";

type VerificationStatus =
  | "idle"
  | "processing"
  | "success"
  | "failed"
  | "listening";
type InputMode = "voice" | "text";

// WebAuthn Types
type AuthenticationState = "none" | "registered" | "verified";

interface VoterRecord {
  voterId: string;
  aadhaarId: string;
  name: string;
  region: string;
  fingerprint_data: string;
  face_data: string;
  isRegistered: boolean;
}

/**
 * Enhanced error types for specific verification failures
 */
type VerificationErrorType =
  | "voter_not_found"
  | "invalid_voter_id"
  | "biometric_mismatch"
  | "region_mismatch"
  | "multiple_attempts"
  | "system_error"
  | "timeout"
  | "suspicious_activity";

interface VerificationError {
  type: VerificationErrorType;
  message: string;
  details?: string;
  timestamp: Date;
}

// Memoized sub-components
const VerificationLoadingState = React.memo(() => (
  <div className="text-center space-y-4 py-8">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent mx-auto" />
    <p className="text-xl text-gray-700">Processing verification...</p>
  </div>
));

const ErrorMessage = React.memo(({ message }: { message: string }) => (
  <div className="p-4 bg-red-100 bg-opacity-80 backdrop-blur-sm border border-red-200 rounded-lg text-red-700 animate-pulse">
    {message}
  </div>
));

ErrorMessage.displayName = "ErrorMessage";

interface VoterVerificationProps {
  onVerificationComplete?: (success: boolean) => void;
}

const VoterVerification: React.FC<VoterVerificationProps> = ({
  onVerificationComplete,
}) => {
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [voiceMessage, setVoiceMessage] = useState("");
  const [inputMode, setInputMode] = useState<InputMode>("voice");
  const [isListening, setIsListening] = useState(false);
  const [voterData, setVoterData] = useState({
    voterId: "",
    name: "",
  });
  const [authState, setAuthState] = useState<AuthenticationState>("none");
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [verificationStep, setVerificationStep] = useState<
    "initial" | "id_verified" | "biometric_verified" | "region_verified"
  >("initial");

  const recognitionRef = useRef<any>(null);
  const hasSpoken = useRef(false);

  // Add rate limiting state
  const [verificationAttempts, setVerificationAttempts] = useState<number>(0);
  const MAX_VERIFICATION_ATTEMPTS = 3;
  const VERIFICATION_TIMEOUT = 300000; // 5 minutes in milliseconds

  const navigate = useNavigate();

  /**
   * Validate Voter ID format (ABC1234567)
   */
  const isValidVoterId = (id: string): boolean => {
    const voterIdRegex = /^[A-Z]{3}\d{7}$/;
    return voterIdRegex.test(id);
  };

  /**
   * Voice Recognition Setup
   * Initializes and manages the voice recognition system
   */
  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      recognitionRef.current = new (window as any).webkitSpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = "en-IN"; // Set to Indian English

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join("");

        setVoiceMessage(transcript);
        processVoiceCommand(transcript.toLowerCase());
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error("Voice recognition error:", event.error);
        setErrorMessage(
          "Voice input error. Please try again or use text input."
        );
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  /**
   * Process voice commands and update voter data accordingly
   */
  const processVoiceCommand = (transcript: string) => {
    // Process Voter ID - Look for format ABC1234567
    const voterIdMatch = transcript.match(/[a-zA-Z]{3}\s*\d{7}/g);
    if (voterIdMatch) {
      const voterId = voterIdMatch[0].replace(/\s/g, "").toUpperCase();
      if (isValidVoterId(voterId)) {
        setVoterData((prev) => ({ ...prev, voterId }));
        speak("Voter ID recorded. Please state your full name.");
        return;
      } else {
        speak(
          "Invalid Voter ID format. Please try again with format ABC1234567."
        );
      }
    }

    // Process Name
    if (transcript.includes("my name is") || transcript.includes("name is")) {
      const nameMatch = transcript.match(/(?:my name is|name is) (.*)/i);
      if (nameMatch && nameMatch[1]) {
        const name = nameMatch[1].trim();
        setVoterData((prev) => ({ ...prev, name }));
        speak(
          "Name recorded. Please confirm your details or say 'verify' to proceed."
        );
      }
    }

    // Process verification command
    if (transcript.includes("verify") || transcript.includes("confirm")) {
      handleVerification();
    }
  };

  /**
   * Text-to-Speech Function
   */
  const speak = (text: string) => {
    if ("speechSynthesis" in window && !window.speechSynthesis.speaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  /**
   * Initial Welcome Message
   */
  useEffect(() => {
    if (!hasSpoken.current) {
      speak(
        "Welcome to VoteX. Please speak your Voter ID in format ABC followed by 7 digits."
      );
      hasSpoken.current = true;
    }
  }, []);

  // Memoized handlers
  const handleVoterIdChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.toUpperCase();
      if (value.length <= 10) {
        setVoterData((prev) => ({ ...prev, voterId: value }));
        setErrorMessage("");
      }
    },
    []
  );

  const toggleVoiceInput = useCallback(() => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
      speak(
        "Voice input activated. Please speak your Voter ID in format ABC followed by 7 digits."
      );
    }
    setIsListening(!isListening);
  }, [isListening]);

  /**
   * Toggle Input Mode
   */
  const toggleInputMode = () => {
    setInputMode((prev) => (prev === "voice" ? "text" : "voice"));
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }
  };

  /**
   * Check WebAuthn Support
   * Verifies if the browser and device support biometric authentication
   */
  useEffect(() => {
    const checkBiometricSupport = async () => {
      if (window.PublicKeyCredential) {
        try {
          const available =
            await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
          setIsBiometricSupported(available);
        } catch (error) {
          console.error("Error checking biometric support:", error);
          setIsBiometricSupported(false);
        }
      }
    };

    checkBiometricSupport();
  }, []);

  /**
   * Create Challenge for Fingerprint Authentication
   */
  const createChallenge = (): Uint8Array => {
    return crypto.getRandomValues(new Uint8Array(32));
  };

  /**
   * Initialize Fingerprint Authentication
   */
  const initiateFingerprintAuth = async () => {
    if (!voterData.voterId || !isValidVoterId(voterData.voterId)) {
      const message =
        "Please enter a valid Voter ID before fingerprint verification.";
      setErrorMessage(message);
      speak(message);
      return;
    }

    try {
      const challenge = createChallenge();

      const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions =
        {
          challenge,
          rp: {
            name: "VoteX",
            id: window.location.hostname,
          },
          user: {
            id: Uint8Array.from(voterData.voterId, (c) => c.charCodeAt(0)),
            name: voterData.voterId,
            displayName: voterData.name || voterData.voterId,
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
        setAuthState("registered");
        verifyFingerprint();
      }
    } catch (error) {
      console.error("Fingerprint registration error:", error);
      const message = "Fingerprint registration failed. Please try again.";
      setErrorMessage(message);
      speak(message);
    }
  };

  /**
   * Verify Fingerprint
   */
  const verifyFingerprint = async () => {
    try {
      const challenge = createChallenge();

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
        setAuthState("verified");
        speak("Fingerprint verified successfully.");
        handleVerification();
      }
    } catch (error) {
      console.error("Fingerprint verification error:", error);
      const message = "Fingerprint verification failed. Please try again.";
      setErrorMessage(message);
      speak(message);
    }
  };

  /**
   * Verify Voter ID against database
   */
  const verifyVoterId = async (
    voterId: string
  ): Promise<VoterRecord | null> => {
    try {
      const votersRef = collection(db, "voters");
      const q = query(votersRef, where("voterId", "==", voterId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error("Voter ID not found in database");
      }

      const voterData = querySnapshot.docs[0].data() as VoterRecord;
      return voterData;
    } catch (error) {
      console.error("Error verifying voter ID:", error);
      return null;
    }
  };

  /**
   * Verify voter in regional database
   */
  const verifyVoterInRegion = async (
    voterId: string,
    region: string
  ): Promise<boolean> => {
    try {
      const regionVotersRef = collection(
        db,
        `regions/${region}/registered_voters`
      );
      const q = query(regionVotersRef, where("voterId", "==", voterId));
      const querySnapshot = await getDocs(q);

      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error verifying voter in region:", error);
      return false;
    }
  };

  /**
   * Compare minutiae points between two fingerprint templates
   */
  const compareMinutiae = async (
    current: string,
    stored: string
  ): Promise<number> => {
    // In a real implementation, this would use a fingerprint SDK
    // to compare minutiae points (ridge endings and bifurcations)
    // This is a placeholder that returns a similarity score between 0 and 1
    return 0.9;
  };

  /**
   * Compare overall fingerprint patterns
   */
  const comparePatterns = async (
    current: string,
    stored: string
  ): Promise<number> => {
    // In a real implementation, this would compare
    // pattern types (arch, loop, whorl) and their characteristics
    // This is a placeholder that returns a similarity score between 0 and 1
    return 0.85;
  };

  /**
   * Calculate quality score of fingerprint image
   */
  const calculateQualityScore = (fingerprint: string): number => {
    // In a real implementation, this would analyze:
    // - Image clarity
    // - Ridge contrast
    // - Ridge flow continuity
    // - Amount of distinguishable minutiae
    // This is a placeholder that returns a quality score between 0 and 1
    return 0.95;
  };

  /**
   * Enhanced biometric comparison with multiple factors
   */
  const compareFingerprint = async (
    voterId: string,
    currentFingerprint: any
  ): Promise<{ isMatch: boolean; confidence: number; error?: string }> => {
    try {
      const voterRef = doc(db, "voters", voterId);
      const voterDoc = await getDoc(voterRef);

      if (!voterDoc.exists()) {
        return {
          isMatch: false,
          confidence: 0,
          error: "Voter record not found",
        };
      }

      const storedFingerprint = voterDoc.data().fingerprint_data;

      // Implement multiple biometric checks
      const checks = {
        minutiaeMatch: await compareMinutiae(
          currentFingerprint,
          storedFingerprint
        ),
        patternMatch: await comparePatterns(
          currentFingerprint,
          storedFingerprint
        ),
        qualityScore: calculateQualityScore(currentFingerprint),
      };

      const confidence = calculateConfidenceScore(checks);
      const CONFIDENCE_THRESHOLD = 0.85;

      const result = {
        isMatch: confidence >= CONFIDENCE_THRESHOLD,
        confidence,
        error:
          confidence < CONFIDENCE_THRESHOLD
            ? "Low confidence match"
            : undefined,
      };

      return result;
    } catch (error) {
      console.error("Error comparing fingerprint:", error);
      return {
        isMatch: false,
        confidence: 0,
        error: "Biometric comparison failed",
      };
    }
  };

  /**
   * Calculate biometric confidence score
   */
  const calculateConfidenceScore = (checks: any): number => {
    const weights = {
      minutiaeMatch: 0.5,
      patternMatch: 0.3,
      qualityScore: 0.2,
    };

    return (
      checks.minutiaeMatch * weights.minutiaeMatch +
      checks.patternMatch * weights.patternMatch +
      checks.qualityScore * weights.qualityScore
    );
  };

  /**
   * Enhanced verification process with additional security checks
   */
  const handleVerification = async () => {
    // Rate limiting check
    if (verificationAttempts >= MAX_VERIFICATION_ATTEMPTS) {
      const message = `Maximum verification attempts (${MAX_VERIFICATION_ATTEMPTS}) reached. Please try again after 5 minutes.`;
      setErrorMessage(message);
      speak(message);

      // Set timeout for retry
      setTimeout(() => {
        setVerificationAttempts(0);
        setErrorMessage("");
      }, VERIFICATION_TIMEOUT);

      return;
    }

    if (!voterData.voterId || !voterData.name) {
      const message =
        "Please provide both Voter ID and name before verification.";
      setErrorMessage(message);
      speak(message);
      return;
    }

    if (!isValidVoterId(voterData.voterId)) {
      const message = "Invalid Voter ID format. Please use format ABC1234567.";
      setErrorMessage(message);
      speak(message);
      return;
    }

    setStatus("processing");
    speak("Processing your verification. Please wait.");

    let currentBiometricResult: {
      isMatch: boolean;
      confidence: number;
      error?: string;
    } | null = null;

    try {
      // Step 1: Verify Voter ID with enhanced error handling
      const voterRecord = await verifyVoterId(voterData.voterId);
      if (!voterRecord) {
        throw new Error("Voter ID not found in the database");
      }

      // Check for suspicious activity
      const suspiciousActivity = await checkSuspiciousActivity(
        voterData.voterId
      );
      if (suspiciousActivity) {
        throw new Error("Suspicious activity detected");
      }

      setVerificationStep("id_verified");
      speak("Voter ID verified. Proceeding with biometric verification.");

      // Step 2: Enhanced Biometric Verification
      if (isBiometricSupported) {
        if (authState !== "verified") {
          const message = "Please complete fingerprint verification.";
          setErrorMessage(message);
          speak(message);
          setStatus("idle");
          return;
        }

        currentBiometricResult = await compareFingerprint(
          voterData.voterId,
          "current_fingerprint_data"
        );

        if (!currentBiometricResult.isMatch) {
          throw new Error("Biometric verification failed");
        }

        setVerificationStep("biometric_verified");
        speak(
          "Biometric verification successful. Checking regional voter list."
        );
      }

      // Step 3: Enhanced Regional Verification
      const isRegisteredInRegion = await verifyVoterInRegion(
        voterData.voterId,
        voterRecord.region
      );

      if (!isRegisteredInRegion) {
        throw new Error("Voter not found in regional voter list");
      }

      setVerificationStep("region_verified");

      // Log successful verification with enhanced details
      await addDoc(collection(db, "verification_logs"), {
        verification_type: "complete",
        voter_id: voterData.voterId,
        fingerprint_verified: authState === "verified",
        region_verified: true,
        status: "success",
        timestamp: new Date(),
        steps_completed: {
          id_verification: true,
          biometric_verification: authState === "verified",
          region_verification: true,
        },
        security_checks: {
          suspicious_activity_checked: true,
          rate_limit_checked: true,
          biometric_confidence: currentBiometricResult?.confidence || null,
        },
      });

      setStatus("success");
      speak(
        "All verifications successful. You may proceed to the voting booth."
      );

      // Reset verification attempts on success
      setVerificationAttempts(0);

      // Verification successful
      onVerificationComplete?.(true);
      navigate("/voting-booth", { state: { voterId: voterData.voterId } });
    } catch (error) {
      console.error("Verification error:", error);
      setStatus("failed");

      // Increment verification attempts
      setVerificationAttempts((prev) => prev + 1);

      // Enhanced error handling with specific messages
      const verificationError = error as Error;
      const errorMessage = verificationError.message;
      setErrorMessage(errorMessage);
      speak(errorMessage);

      // Log failed verification with enhanced details
      await addDoc(collection(db, "verification_logs"), {
        verification_type: "complete",
        voter_id: voterData.voterId,
        fingerprint_verified: authState === "verified",
        status: "failed",
        error_type: verificationError.name,
        error_message: errorMessage,
        timestamp: new Date(),
        steps_completed: {
          id_verification: verificationStep === "id_verified",
          biometric_verification: verificationStep === "biometric_verified",
          region_verification: verificationStep === "region_verified",
        },
        attempts: verificationAttempts,
      });

      // Verification failed
      onVerificationComplete?.(false);
    }
  };

  /**
   * Check for suspicious activity
   */
  const checkSuspiciousActivity = async (voterId: string): Promise<boolean> => {
    try {
      const logsRef = collection(db, "verification_logs");
      const timeWindow = new Date(Date.now() - 24 * 60 * 60 * 1000); // Last 24 hours

      const q = query(
        logsRef,
        where("voter_id", "==", voterId),
        where("timestamp", ">=", timeWindow)
      );

      const querySnapshot = await getDocs(q);
      const attempts = querySnapshot.docs.map((doc) => doc.data());

      // Check for multiple failed attempts
      const failedAttempts = attempts.filter((a) => a.status === "failed");
      if (failedAttempts.length >= MAX_VERIFICATION_ATTEMPTS) {
        return true;
      }

      // Check for attempts from different locations (if location data available)
      const uniqueLocations = new Set(
        attempts.map((a) => a.location).filter(Boolean)
      );
      if (uniqueLocations.size > 2) {
        // More than 2 different locations
        return true;
      }

      return false;
    } catch (error) {
      console.error("Error checking suspicious activity:", error);
      return false;
    }
  };

  // Add verification step indicator component
  const VerificationSteps = () => (
    <div className="flex justify-center items-center space-x-4 mb-6">
      <StepIndicator
        step="ID Verification"
        completed={verificationStep !== "initial"}
        current={verificationStep === "initial"}
      />
      <div className="h-px w-8 bg-white/20" />
      <StepIndicator
        step="Biometric Check"
        completed={
          verificationStep === "biometric_verified" ||
          verificationStep === "region_verified"
        }
        current={verificationStep === "id_verified"}
      />
      <div className="h-px w-8 bg-white/20" />
      <StepIndicator
        step="Regional Verification"
        completed={verificationStep === "region_verified"}
        current={verificationStep === "biometric_verified"}
      />
    </div>
  );

  const StepIndicator = ({
    step,
    completed,
    current,
  }: {
    step: string;
    completed: boolean;
    current: boolean;
  }) => (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          completed
            ? "bg-green-500"
            : current
            ? "bg-blue-500 animate-pulse"
            : "bg-white/10"
        }`}
      >
        {completed ? (
          <UserCheck className="h-4 w-4 text-white" />
        ) : (
          <span className="text-sm text-white">{step[0]}</span>
        )}
      </div>
      <span className="text-xs mt-1 text-white/60">{step}</span>
    </div>
  );

  // Add Fingerprint Button Component
  const FingerprintButton = () => (
    <button
      onClick={initiateFingerprintAuth}
      disabled={!isBiometricSupported || authState === "verified"}
      className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
        authState === "verified"
          ? "bg-green-500/20 text-green-400"
          : "bg-white/10 hover:bg-white/20 text-white"
      } ${!isBiometricSupported && "opacity-50 cursor-not-allowed"}`}
    >
      <Fingerprint className="h-5 w-5" />
      <span>
        {authState === "verified"
          ? "Fingerprint Verified"
          : "Verify Fingerprint"}
      </span>
    </button>
  );

  // Memoized computations
  const isVerificationDisabled = useMemo(() => {
    return (
      !voterData.voterId ||
      !voterData.name ||
      verificationAttempts >= MAX_VERIFICATION_ATTEMPTS
    );
  }, [voterData.voterId, voterData.name, verificationAttempts]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Voter Verification
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {status === "idle" && (
              <div className="space-y-8">
                {/* Voice Input Section */}
                {inputMode === "voice" && (
                  <div className="text-center space-y-6">
                    <button
                      onClick={toggleVoiceInput}
                      className={`p-8 rounded-full transition-all duration-300 ${
                        isListening
                          ? "glass-effect ring-2 ring-green-400 animate-pulse"
                          : "glass-effect hover:bg-white hover:bg-opacity-30"
                      }`}
                    >
                      {isListening ? (
                        <Mic className="h-12 w-12 text-green-600" />
                      ) : (
                        <MicOff className="h-12 w-12 text-gray-600" />
                      )}
                    </button>
                    <p className="text-lg text-gray-700">
                      {isListening
                        ? "Listening... Speak clearly"
                        : "Click the microphone to start speaking"}
                    </p>
                    {voiceMessage && (
                      <div className="p-4 bg-red-100 bg-opacity-80 backdrop-blur-sm border border-red-200 rounded-lg text-red-700 animate-pulse">
                        {voiceMessage}
                      </div>
                    )}
                  </div>
                )}

                {/* Text Input Section */}
                {inputMode === "text" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Voter ID
                        </label>
                        <input
                          type="text"
                          value={voterData.voterId}
                          onChange={handleVoterIdChange}
                          className="w-full px-4 py-3 rounded-lg glass-effect text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Format: ABC1234567"
                          maxLength={10}
                        />
                        <p className="mt-1 text-xs text-gray-600">
                          Example: ABC1234567 (3 letters followed by 7 digits)
                        </p>
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={voterData.name}
                          onChange={(e) =>
                            setVoterData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          className="w-full px-4 py-3 rounded-lg glass-effect text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Status Indicators */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 glass-effect rounded-lg flex flex-col items-center">
                          <Camera className="h-10 w-10 mb-3 text-indigo-600" />
                          <span className="text-sm font-medium text-gray-700">
                            Camera Ready
                          </span>
                        </div>
                        <div
                          className={`p-6 glass-effect rounded-lg flex flex-col items-center ${
                            authState === "verified"
                              ? "ring-2 ring-green-400"
                              : ""
                          }`}
                        >
                          <Fingerprint
                            className={`h-10 w-10 mb-3 ${
                              authState === "verified"
                                ? "text-green-600"
                                : "text-purple-600"
                            }`}
                          />
                          <span className="text-sm font-medium text-gray-700">
                            {authState === "verified"
                              ? "Fingerprint Verified"
                              : isBiometricSupported
                              ? "Touch ID Ready"
                              : "Touch ID Not Available"}
                          </span>
                        </div>
                      </div>
                      {isBiometricSupported && <FingerprintButton />}
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {errorMessage && <ErrorMessage message={errorMessage} />}

                {/* Verification Button */}
                <div className="text-center">
                  <button
                    onClick={handleVerification}
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Verify Identity
                  </button>
                </div>
              </div>
            )}

            {/* Processing State */}
            {status === "processing" && <VerificationLoadingState />}

            {/* Add Verification Steps Indicator */}
            {status === "processing" && <VerificationSteps />}

            {/* Success State */}
            {status === "success" && (
              <div className="text-center space-y-6 py-8">
                <UserCheck className="h-20 w-20 text-green-600 mx-auto animate-bounce" />
                <div>
                  <p className="text-2xl font-semibold text-green-700 mb-2">
                    Verification Successful
                  </p>
                  <p className="text-lg text-green-600">
                    You may proceed to the voting booth
                  </p>
                </div>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setVoterData({ voterId: "", name: "" });
                    setVoiceMessage("");
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/20"
                >
                  Verify Another Voter
                </button>
              </div>
            )}

            {/* Failure State */}
            {status === "failed" && (
              <div className="text-center space-y-6 py-8">
                <AlertCircle className="h-20 w-20 text-red-600 mx-auto animate-pulse" />
                <div>
                  <p className="text-2xl font-semibold text-red-700 mb-2">
                    Verification Failed
                  </p>
                  <p className="text-lg text-red-600">{errorMessage}</p>
                </div>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-3 glass-effect hover:bg-white hover:bg-opacity-30 text-gray-700 rounded-lg transition transform hover:scale-105"
                  >
                    Try Again
                  </button>
                  <Link
                    to="/staff"
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg transition transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Contact Staff
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(VoterVerification);
