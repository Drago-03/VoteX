import { systemPreferences } from 'electron';
import * as faceapi from 'face-api.js';

interface BiometricVerificationResult {
  success: boolean;
  method: 'touchid' | 'faceid' | 'none';
  timestamp: number;
}

export class BiometricAuthService {
  private static instance: BiometricAuthService;
  private videoStream: MediaStream | null = null;

  private constructor() {
    this.initializeFaceAPI();
  }

  static getInstance(): BiometricAuthService {
    if (!BiometricAuthService.instance) {
      BiometricAuthService.instance = new BiometricAuthService();
    }
    return BiometricAuthService.instance;
  }

  private async initializeFaceAPI(): Promise<void> {
    try {
      await Promise.all([
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
      ]);
    } catch (error) {
      console.error('Failed to initialize FaceAPI:', error);
      throw error;
    }
  }

  async authenticateWithTouchID(): Promise<BiometricVerificationResult> {
    try {
      if (!systemPreferences.canPromptTouchID()) {
        throw new Error('Touch ID not available');
      }

      await systemPreferences.promptTouchID('Verify your identity to proceed with voting');
      
      return {
        success: true,
        method: 'touchid',
        timestamp: Date.now()
      };
    } catch (error) {
      console.error('Touch ID authentication failed:', error);
      return {
        success: false,
        method: 'none',
        timestamp: Date.now()
      };
    }
  }

  async startFacialRecognition(): Promise<MediaStream> {
    try {
      this.videoStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { min: 640, ideal: 1280, max: 1920 },
          height: { min: 480, ideal: 720, max: 1080 }
        }
      });
      return this.videoStream;
    } catch (error) {
      console.error('Failed to start camera:', error);
      throw error;
    }
  }

  async verifyFace(videoElement: HTMLVideoElement): Promise<BiometricVerificationResult> {
    try {
      const detection = await faceapi.detectSingleFace(videoElement)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!detection) {
        throw new Error('No face detected');
      }

      // Here you would typically compare the face descriptor with a stored one
      // For demo purposes, we'll just verify that a face was detected
      return {
        success: true,
        method: 'faceid',
        timestamp: Date.now()
      };
    } catch (error) {
      console.error('Face verification failed:', error);
      return {
        success: false,
        method: 'none',
        timestamp: Date.now()
      };
    }
  }

  stopFacialRecognition(): void {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
      this.videoStream = null;
    }
  }

  async verifyVoterID(voterId: string): Promise<boolean> {
    try {
      // Here you would typically make an API call to verify the voter ID
      const response = await fetch('/api/verify-voter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ voterId })
      });

      const data = await response.json();
      return data.verified;
    } catch (error) {
      console.error('Voter ID verification failed:', error);
      return false;
    }
  }
}

export default BiometricAuthService.getInstance();
