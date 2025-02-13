// Import services
import BiometricService from "../services/BiometricService";
import AadhaarService from "../services/AadhaarService";
import HumanDetectionService from "../services/HumanDetectionService";
import AdminService from "../services/AdminService";

// Import components
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, AlertCircle, UserCheck } from "lucide-react";
import FaceDetection from "../components/FaceDetection";
import { auth } from "../firebase";

// ... existing code ...

const VoterVerification: React.FC<VoterVerificationProps> = ({
  onVerificationComplete,
}) => {
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [voterData, setVoterData] = useState({
    voterId: "",
    name: "",
  });
  const [state, setState] = useState<VerificationState>({
    isHumanDetected: false,
    isCameraReady: false,
    isPhotoTaken: false,
    isFingerPrintScanned: false,
    isAadhaarVerified: false,
    isVoterIdConfirmed: false,
    isVoterListVerified: false,
    photoUrl: null,
    fingerPrintData: null,
    voterDetails: null,
    error: null,
  });

  const navigate = useNavigate();

  const handleFaceDetectionComplete = (success: boolean) => {
    setState((prev) => ({
      ...prev,
      isHumanDetected: success,
      error: success ? null : "Face detection failed. Please try again.",
    }));

    if (success) {
      speak(
        "Face detected successfully. Please proceed with voter verification."
      );
    } else {
      speak(
        "Face detection failed. Please ensure you are clearly visible to the camera."
      );
    }
  };

  const handlePhotoCapture = (photoData: string) => {
    setState((prev) => ({
      ...prev,
      isPhotoTaken: true,
      photoUrl: photoData,
    }));
    speak(
      "Photo captured successfully. Please proceed with voter verification."
    );
  };

  // ... rest of your existing code ...

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Voter Verification
        </h1>

        {/* Face Detection Section */}
        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Camera className="h-6 w-6" />
            Face Detection
          </h2>

          <FaceDetection
            onDetectionComplete={handleFaceDetectionComplete}
            onPhotoCapture={handlePhotoCapture}
          />

          {/* Status Indicator */}
          {state.isHumanDetected && (
            <div className="mt-4 p-3 bg-green-500/20 rounded-lg flex items-center gap-2">
              <UserCheck className="h-5 w-5 text-green-400" />
              <span>Face verified successfully</span>
            </div>
          )}
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="p-4 bg-red-500/20 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Rest of your existing UI components */}
      </div>
    </div>
  );
};

export default VoterVerification;

// ... existing code ...
