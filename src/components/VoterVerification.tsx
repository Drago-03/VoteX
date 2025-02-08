/**
 * Voter Verification Component
 * The main interface for voters to verify their identity using AI-powered face recognition
 * and Aadhaar card verification. Features real-time feedback and voice interaction.
 */

import React, { useState, useEffect, useRef } from "react";
import { Camera, Fingerprint, UserCheck, AlertCircle, Mic } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// Define possible states for the verification process
type VerificationStatus = "idle" | "processing" | "success" | "failed";

export function VoterVerification() {
  // State Management
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [voiceMessage, setVoiceMessage] = useState("");
  const [voterData, setVoterData] = useState({
    aadhaarId: "", // Voter's Aadhaar card number
    name: "", // Voter's full name
  });
  const hasSpoken = useRef(false);

  /**
   * Text-to-Speech Function
   * Converts text messages to speech for accessibility and user feedback
   */
  const speak = (text: string) => {
    if ("speechSynthesis" in window && !window.speechSynthesis.speaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1; // Normal speaking rate
      utterance.pitch = 1; // Normal pitch
      window.speechSynthesis.speak(utterance);
    }
  };

  /**
   * Initial Welcome Message
   * Greets users with voice instructions when they first arrive
   */
  useEffect(() => {
    if (!hasSpoken.current) {
      speak(
        "Welcome to VoteX. Please enter your Aadhaar ID and name for verification."
      );
      hasSpoken.current = true;
    }

    // Cleanup any ongoing speech when component unmounts
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  /**
   * Verification Handler
   * Processes the voter verification attempt using AI and biometric checks
   */
  const handleVerification = async () => {
    // Validate required fields
    if (!voterData.aadhaarId || !voterData.name) {
      const message = "Please enter all required information";
      setErrorMessage(message);
      speak(message);
      return;
    }

    setStatus("processing");
    speak("Processing your verification. Please wait.");

    try {
      // Simulate API calls to Vision AI and Aadhaar API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate 70% success rate for demo
      const success = Math.random() > 0.3;

      // Log verification attempt in database
      await addDoc(collection(db, "verification_logs"), {
        verification_type: "face",
        status: success ? "success" : "failed",
        error_message: success ? null : "Facial recognition failed",
        timestamp: new Date(),
        voter_data: voterData,
      });

      // Update UI and provide voice feedback
      setStatus(success ? "success" : "failed");
      speak(
        success
          ? "Verification successful. You may proceed to the voting booth."
          : "Verification failed. Please try again or seek staff assistance."
      );

      if (!success) {
        setErrorMessage(
          "Verification failed. Please try again or seek staff assistance."
        );
      }
    } catch (error) {
      console.error("Verification error:", error);
      setStatus("failed");
      const message =
        "An error occurred during verification. Please try again.";
      setErrorMessage(message);
      speak(message);
    }
  };

  /**
   * Input Change Handler
   * Updates form data and clears any error messages
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVoterData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Verification Card */}
      <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl p-8 text-white shadow-xl border border-white/20">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Voter Verification
          </h2>
          <p className="text-lg text-blue-200">
            Secure, Fast, and AI-Powered Verification System
          </p>
        </div>

        <div className="space-y-8">
          {/* Initial Verification Form */}
          {status === "idle" && (
            <div className="space-y-8">
              {/* Input Fields Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form Fields */}
                <div className="space-y-4">
                  {/* Aadhaar ID Input */}
                  <div className="relative">
                    <label className="block text-sm font-medium mb-1">
                      Aadhaar ID
                    </label>
                    <input
                      type="text"
                      name="aadhaarId"
                      value={voterData.aadhaarId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter your Aadhaar ID"
                    />
                  </div>
                  {/* Full Name Input */}
                  <div className="relative">
                    <label className="block text-sm font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={voterData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Status Indicators */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Camera Status */}
                    <div className="p-6 bg-white/5 rounded-lg flex flex-col items-center hover:bg-white/10 transition-all">
                      <Camera className="h-10 w-10 mb-3 text-blue-400" />
                      <span className="text-sm font-medium">Camera Ready</span>
                    </div>
                    {/* Fingerprint Scanner Status */}
                    <div className="p-6 bg-white/5 rounded-lg flex flex-col items-center hover:bg-white/10 transition-all">
                      <Fingerprint className="h-10 w-10 mb-3 text-purple-400" />
                      <span className="text-sm font-medium">Scanner Ready</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Error Message Display */}
              {errorMessage && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 animate-pulse">
                  {errorMessage}
                </div>
              )}

              {/* Verification Button */}
              <div className="text-center">
                <button
                  onClick={handleVerification}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Start Verification
                </button>
              </div>
            </div>
          )}

          {/* Loading State */}
          {status === "processing" && (
            <div className="text-center space-y-4 py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto" />
              <p className="text-xl">Processing verification...</p>
            </div>
          )}

          {/* Success State */}
          {status === "success" && (
            <div className="text-center space-y-6 py-8">
              <UserCheck className="h-20 w-20 text-green-400 mx-auto animate-bounce" />
              <div>
                <p className="text-2xl font-semibold text-green-400 mb-2">
                  Verification Successful
                </p>
                <p className="text-lg text-green-200">
                  You may proceed to the voting booth
                </p>
              </div>
              <button
                onClick={() => {
                  setStatus("idle");
                  setVoterData({ aadhaarId: "", name: "" });
                }}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg transition transform hover:scale-105"
              >
                Verify Another Voter
              </button>
            </div>
          )}

          {/* Failure State */}
          {status === "failed" && (
            <div className="text-center space-y-6 py-8">
              <AlertCircle className="h-20 w-20 text-red-400 mx-auto animate-pulse" />
              <div>
                <p className="text-2xl font-semibold text-red-400 mb-2">
                  Verification Failed
                </p>
                <p className="text-lg text-red-200">{errorMessage}</p>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition transform hover:scale-105"
                >
                  Try Again
                </button>
                <a
                  href="/staff"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition transform hover:scale-105 inline-block"
                >
                  Contact Staff
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
