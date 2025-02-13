import { useState } from "react";
import styles from "@/styles/FloatingVideo.module.css";
import FaceDetection from "./FaceDetection";

const FloatingVideo = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const handleCapture = async (imageData: string) => {
    try {
      // Send the captured image to your API for comparison
      const response = await fetch("/api/verify-face", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageData }),
      });

      if (!response.ok) {
        throw new Error("Face verification failed");
      }

      // Handle successful verification
      // Proceed to fingerprint verification
    } catch (error) {
      console.error("Error during face verification:", error);
    }
  };

  return (
    <div className={styles.floatingVideo}>
      <div className={styles.controls}>
        <button onClick={() => setIsMinimized(!isMinimized)}>
          {isMinimized ? "Expand" : "Minimize"}
        </button>
      </div>
      <div
        className={`${styles.videoContainer} ${
          isMinimized ? styles.minimized : ""
        }`}
      >
        <FaceDetection onCapture={handleCapture} />
      </div>
    </div>
  );
};

export default FloatingVideo;
