import * as faceapi from 'face-api.js';

interface FaceVerificationResult {
  isMatch: boolean;
  confidence: number;
  livenessScore: number;
  timestamp: number;
}

export class FacialRecognitionService {
  private static instance: FacialRecognitionService;
  private isInitialized: boolean = false;
  private stream: MediaStream | null = null;
  private faceDescriptors: Float32Array[] = [];

  private constructor() {}

  static getInstance(): FacialRecognitionService {
    if (!FacialRecognitionService.instance) {
      FacialRecognitionService.instance = new FacialRecognitionService();
    }
    return FacialRecognitionService.instance;
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models')
      ]);
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize FaceAPI models:', error);
      throw new Error('Face recognition initialization failed');
    }
  }

  async startCamera(): Promise<MediaStream> {
    if (this.stream) return this.stream;

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      return this.stream;
    } catch (error) {
      console.error('Camera access failed:', error);
      throw new Error('Unable to access camera');
    }
  }

  async verifyFaceWithID(videoElement: HTMLVideoElement, idImage: HTMLImageElement): Promise<FaceVerificationResult> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      // Detect face in live video
      const detection = await faceapi.detectSingleFace(videoElement)
        .withFaceLandmarks()
        .withFaceDescriptor();

      // Detect face in ID image
      const idDetection = await faceapi.detectSingleFace(idImage)
        .withFaceLandmarks()
        .withFaceDescriptor();

      if (!detection || !idDetection) {
        throw new Error('Face not detected in video or ID');
      }

      // Compare face descriptors
      const distance = faceapi.euclideanDistance(
        detection.descriptor,
        idDetection.descriptor
      );

      // Check liveness using facial landmarks movement
      const livenessScore = await this.performLivenessCheck(videoElement);

      return {
        isMatch: distance < 0.6, // Threshold for face matching
        confidence: 1 - distance,
        livenessScore,
        timestamp: Date.now()
      };
    } catch (error) {
      console.error('Face verification failed:', error);
      throw error;
    }
  }

  private async performLivenessCheck(videoElement: HTMLVideoElement): Promise<number> {
    const samples = 10;
    let movementDetected = 0;
    const landmarks: any[] = [];

    for (let i = 0; i < samples; i++) {
      const detection = await faceapi.detectSingleFace(videoElement)
        .withFaceLandmarks();
      
      if (detection) {
        landmarks.push(detection.landmarks);
        if (i > 0) {
          const movement = this.calculateLandmarkMovement(
            landmarks[i - 1],
            landmarks[i]
          );
          if (movement > 0.5) movementDetected++;
        }
      }
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return movementDetected / samples;
  }

  private calculateLandmarkMovement(prev: any, current: any): number {
    let totalMovement = 0;
    const positions = prev.positions.map((p: any, i: number) => {
      const dx = p.x - current.positions[i].x;
      const dy = p.y - current.positions[i].y;
      return Math.sqrt(dx * dx + dy * dy);
    });
    
    return positions.reduce((sum: number, val: number) => sum + val, 0) / positions.length;
  }

  stopCamera(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
  }

  dispose(): void {
    this.stopCamera();
    this.isInitialized = false;
    this.faceDescriptors = [];
  }
}

export default FacialRecognitionService.getInstance();
