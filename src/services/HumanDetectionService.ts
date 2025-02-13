import * as tf from "@tensorflow/tfjs";
import * as blazeface from "@tensorflow-models/blazeface";
import * as poseDetection from "@tensorflow-models/pose-detection";
import { db, COLLECTIONS } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export class HumanDetectionService {
  private static instance: HumanDetectionService;
  private faceModel: blazeface.BlazeFaceModel | null = null;
  private poseModel: poseDetection.PoseDetector | null = null;
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): HumanDetectionService {
    if (!HumanDetectionService.instance) {
      HumanDetectionService.instance = new HumanDetectionService();
    }
    return HumanDetectionService.instance;
  }

  /**
   * Initialize TensorFlow models
   */
  public async initialize(): Promise<void> {
    try {
      // Load face detection model
      this.faceModel = await blazeface.load();

      // Load pose detection model
      this.poseModel = await poseDetection.createDetector(
        poseDetection.SupportedModels.MoveNet,
        { modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING }
      );

      this.isInitialized = true;
    } catch (error) {
      console.error("Error initializing human detection:", error);
      throw new Error("Failed to initialize human detection");
    }
  }

  /**
   * Detect human presence in video stream
   */
  public async detectHuman(videoElement: HTMLVideoElement): Promise<{
    isHuman: boolean;
    confidence: number;
    detections: any;
  }> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    try {
      // Convert video frame to tensor
      const videoFrame = tf.browser.fromPixels(videoElement);

      // Run face detection
      const faceDetections = await this.faceModel!.estimateFaces(
        videoFrame,
        false
      );

      // Run pose detection
      const poses = await this.poseModel!.estimatePoses(videoElement);

      // Clean up tensor
      videoFrame.dispose();

      // Analyze results
      const result = this.analyzeDetections(faceDetections, poses);

      // Log detection for audit
      await this.logDetection(result);

      return result;
    } catch (error) {
      console.error("Error in human detection:", error);
      throw new Error("Human detection failed");
    }
  }

  /**
   * Analyze face and pose detections to determine if a real human is present
   */
  private analyzeDetections(
    faceDetections: any[],
    poses: any[]
  ): {
    isHuman: boolean;
    confidence: number;
    detections: any;
  } {
    // Check if face is detected
    const hasFace = faceDetections.length > 0;

    // Check if pose is detected
    const hasValidPose = poses.length > 0 && this.isValidPose(poses[0]);

    // Calculate confidence score
    const faceConfidence = hasFace ? faceDetections[0].probability[0] : 0;
    const poseConfidence = hasValidPose ? poses[0].score : 0;
    const confidence = (faceConfidence + poseConfidence) / 2;

    return {
      isHuman: hasFace && hasValidPose && confidence > 0.7,
      confidence,
      detections: {
        face: faceDetections[0],
        pose: poses[0],
      },
    };
  }

  /**
   * Validate pose detection to ensure it's a real person
   */
  private isValidPose(pose: any): boolean {
    if (!pose || !pose.keypoints) return false;

    // Check if key body points are visible
    const requiredKeypoints = [
      "nose",
      "left_eye",
      "right_eye",
      "left_shoulder",
      "right_shoulder",
    ];
    const visibleKeypoints = pose.keypoints.filter(
      (kp: any) => requiredKeypoints.includes(kp.name) && kp.score > 0.5
    );

    return visibleKeypoints.length >= requiredKeypoints.length * 0.8; // 80% threshold
  }

  /**
   * Log detection results for audit
   */
  private async logDetection(result: {
    isHuman: boolean;
    confidence: number;
    detections: any;
  }): Promise<void> {
    await setDoc(
      doc(db, COLLECTIONS.AUDIT_LOGS, `human_detection_${Date.now()}`),
      {
        type: "human_detection",
        isHuman: result.isHuman,
        confidence: result.confidence,
        timestamp: new Date(),
        // Store minimal detection data for privacy
        detectionSummary: {
          faceDetected: !!result.detections.face,
          poseDetected: !!result.detections.pose,
        },
      }
    );
  }

  /**
   * Clean up resources
   */
  public dispose(): void {
    if (this.faceModel) {
      this.faceModel.dispose();
    }
    if (this.poseModel) {
      this.poseModel.dispose();
    }
    this.isInitialized = false;
  }
}

export default HumanDetectionService.getInstance();
