import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { Camera, CheckCircle } from "lucide-react";

interface FaceDetectionProps {
  onDetectionComplete: (success: boolean) => void;
  onPhotoCapture?: (photoData: string) => void;
}

const FaceDetection: React.FC<FaceDetectionProps> = ({
  onDetectionComplete,
  onPhotoCapture,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [guidance, setGuidance] = useState("Initializing camera...");
  const [detectionStatus, setDetectionStatus] = useState<
    "waiting" | "detecting" | "success" | "error"
  >("waiting");

  useEffect(() => {
    initFaceDetection();
    return () => {
      // Cleanup: stop the camera stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const initFaceDetection = async () => {
    try {
      // Load face detection models
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ]);

      // Start camera
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsReady(true);
        setGuidance("Please position your face in the frame");
        startFaceDetection();
      }
    } catch (error) {
      console.error("Error initializing face detection:", error);
      setGuidance(
        "Error accessing camera. Please ensure camera permissions are granted."
      );
      setDetectionStatus("error");
      onDetectionComplete(false);
    }
  };

  const startFaceDetection = () => {
    if (!videoRef.current) return;
    setDetectionStatus("detecting");

    const detectFace = async () => {
      if (!videoRef.current || !isReady) return;

      try {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks();

        if (detections.length === 0) {
          setGuidance("No face detected. Please look at the camera.");
          return;
        }

        if (detections.length > 1) {
          setGuidance(
            "Multiple faces detected. Please ensure only one person is in frame."
          );
          return;
        }

        const detection = detections[0];
        const isGoodPosition = validateFacePosition(detection);

        if (!isGoodPosition) {
          setGuidance(
            "Please center your face and look directly at the camera"
          );
          return;
        }

        // Face is in good position
        setDetectionStatus("success");
        setGuidance("Face detected successfully!");
        onDetectionComplete(true);

        // Capture photo if needed
        if (onPhotoCapture) {
          capturePhoto();
        }

        // Stop detection after success
        return;
      } catch (error) {
        console.error("Face detection error:", error);
        setGuidance("Face detection error. Please try again.");
        setDetectionStatus("error");
        onDetectionComplete(false);
      }
    };

    // Run detection every 500ms
    const detectionInterval = setInterval(detectFace, 500);
    return () => clearInterval(detectionInterval);
  };

  const validateFacePosition = (detection: any) => {
    if (!videoRef.current) return false;

    const { width, height } = detection.detection.box;
    const videoWidth = videoRef.current.videoWidth;
    const videoHeight = videoRef.current.videoHeight;

    // Check if face is centered and of appropriate size
    const minSize = Math.min(videoWidth, videoHeight) * 0.2; // Face should be at least 20% of frame
    const maxSize = Math.min(videoWidth, videoHeight) * 0.8; // Face should not be more than 80% of frame

    return (
      width > minSize && width < maxSize && height > minSize && height < maxSize
    );
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    // Draw the current video frame on the canvas
    context.drawImage(
      videoRef.current,
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );

    // Convert canvas to data URL
    const photoData = canvasRef.current.toDataURL("image/jpeg");
    onPhotoCapture?.(photoData);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="hidden" width={1280} height={720} />

        {/* Overlay with guidance */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
          <div className="p-4 rounded-lg bg-black/70 text-white text-center">
            {detectionStatus === "success" ? (
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span>{guidance}</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Camera
                  className={`w-6 h-6 ${
                    detectionStatus === "detecting"
                      ? "animate-pulse text-blue-500"
                      : "text-white"
                  }`}
                />
                <span>{guidance}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceDetection;
