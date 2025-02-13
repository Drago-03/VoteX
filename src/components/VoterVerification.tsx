/**
 * Voter Verification Component
 * The main interface for voters to verify their identity using voice commands
 * and AI-powered face recognition with Aadhaar card verification.
 */

import React, { useState, useRef, useEffect } from "react";
import { Camera, Fingerprint, AlertCircle, UserCheck } from "lucide-react";
import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";
import biometricService from "../services/BiometricService";
import aadhaarService from "../services/AadhaarService";

interface VerificationState {
  isProcessing: boolean;
  isCameraReady: boolean;
  isBiometricReady: boolean;
  error: string | null;
  voterDetails: {
    voterId: string;
    name: string;
    fatherName: string;
    address: string;
    constituency: string;
  } | null;
}

const VoterVerification: React.FC = () => {
  const [state, setState] = useState<VerificationState>({
    isProcessing: false,
    isCameraReady: false,
    isBiometricReady: false,
    error: null,
    voterDetails: null,
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  // Initialize camera on component mount
  useEffect(() => {
    initCamera();
    return () => stopCamera();
  }, []);

  const initCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setState((prev) => ({ ...prev, isCameraReady: true }));
      }
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: "Camera access denied. Please allow camera access.",
      }));
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
    }
  };

  const captureAndVerify = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setState((prev) => ({ ...prev, isProcessing: true, error: null }));

    try {
      // 1. Capture photo
      const context = canvasRef.current.getContext("2d");
      if (!context) throw new Error("Could not get canvas context");

      context.drawImage(videoRef.current, 0, 0, 640, 480);
      const photoData = canvasRef.current.toDataURL("image/jpeg");

      // 2. Get biometric data
      const biometricData = await biometricService.captureBiometric();
      setState((prev) => ({ ...prev, isBiometricReady: true }));

      // 3. Verify with Aadhaar
      const aadhaarResult = await aadhaarService.verifyBiometricAndPhoto(
        biometricData,
        photoData
      );

      if (!aadhaarResult.success) {
        throw new Error(aadhaarResult.error || "Verification failed");
      }

      // 4. Log verification
      await addDoc(collection(db, "verification_logs"), {
        verification_type: "complete",
        aadhaar_id: aadhaarResult.aadhaarId,
        voter_id: aadhaarResult.voterId,
        status: "success",
        timestamp: new Date(),
      });

      // 5. Set voter details
      setState((prev) => ({
        ...prev,
        isProcessing: false,
        voterDetails: {
          voterId: aadhaarResult.voterId,
          name: aadhaarResult.name,
          fatherName: aadhaarResult.fatherName,
          address: aadhaarResult.address,
          constituency: aadhaarResult.constituency,
        },
      }));

      // 6. Navigate to voting booth after 3 seconds
      setTimeout(() => {
        navigate("/voting-booth", {
          state: { voterId: aadhaarResult.voterId },
        });
      }, 3000);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isProcessing: false,
        error: error instanceof Error ? error.message : "Verification failed",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Voter Verification
        </h1>

        {/* Main verification area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Camera Feed */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Camera className="h-6 w-6" />
              Face Detection
            </h2>
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover"
              />
              <canvas
                ref={canvasRef}
                className="hidden"
                width="640"
                height="480"
              />
            </div>
          </div>

          {/* Biometric and Status */}
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Fingerprint className="h-6 w-6" />
              Biometric Verification
            </h2>

            {state.isProcessing ? (
              <div className="flex flex-col items-center justify-center space-y-4">
                <LoadingSpinner />
                <p className="text-gray-300">Verifying your identity...</p>
              </div>
            ) : state.voterDetails ? (
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center gap-2 text-green-400">
                  <UserCheck className="h-5 w-5" />
                  <span>Verification Successful</span>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="text-gray-400">Voter ID:</span>{" "}
                    {state.voterDetails.voterId}
                  </p>
                  <p>
                    <span className="text-gray-400">Name:</span>{" "}
                    {state.voterDetails.name}
                  </p>
                  <p>
                    <span className="text-gray-400">Constituency:</span>{" "}
                    {state.voterDetails.constituency}
                  </p>
                </div>
                <p className="text-sm text-blue-400">
                  Redirecting to voting booth...
                </p>
              </div>
            ) : (
              <button
                onClick={captureAndVerify}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Start Verification
              </button>
            )}
          </div>
        </div>

        {/* Error Message */}
        {state.error && (
          <div className="p-4 bg-red-500/20 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <span>{state.error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoterVerification;
