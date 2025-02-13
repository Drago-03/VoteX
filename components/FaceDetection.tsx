import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import styles from "@/styles/FaceDetection.module.css";

const FaceDetection = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [guidance, setGuidance] = useState("Please wait...");

  useEffect(() => {
    loadModels();
    startVideo();
  }, []);

  const loadModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
    ]);
    setIsReady(true);
  };

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  const checkFacePosition = async () => {
    if (!videoRef.current || !canvasRef.current || !isReady) return;

    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks();

    if (detections.length === 0) {
      setGuidance("No face detected. Please look at the camera.");
      return false;
    }

    if (detections.length > 1) {
      setGuidance(
        "Multiple faces detected. Please ensure only one person is in frame."
      );
      return false;
    }

    const detection = detections[0];
    const isGoodPosition = validateFacePosition(detection);

    if (!isGoodPosition) {
      setGuidance("Please center your face and look directly at the camera");
      return false;
    }

    setGuidance("Perfect! Capturing image...");
    return true;
  };

  const validateFacePosition = (detection) => {
    // Add position validation logic here
    const { width, height } = detection.detection.box;
    return width > 100 && height > 100; // Basic size check
  };

  const captureImage = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    const isPositionGood = await checkFacePosition();
    if (!isPositionGood) return;

    const context = canvasRef.current.getContext("2d");
    context?.drawImage(videoRef.current, 0, 0, 640, 480);
    const imageData = canvasRef.current.toDataURL("image/jpeg");
    onCapture(imageData);
  };

  return (
    <div className={styles.container}>
      <video ref={videoRef} autoPlay muted className={styles.video} />
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        width="640"
        height="480"
      />
      <div className={styles.guidance}>{guidance}</div>
      <button
        onClick={captureImage}
        disabled={!isReady}
        className={styles.captureButton}
      >
        Capture Image
      </button>
    </div>
  );
};

export default FaceDetection;
