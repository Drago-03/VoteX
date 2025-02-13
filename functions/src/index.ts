/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
import { onRequest } from "firebase-functions/v2/https";
import { Request, Response } from "express";
import { logger } from "firebase-functions"; // Changed this line
import * as admin from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/auth";

// Extend Express Request type
declare global {
  namespace Express {
    interface Request {
      auth?: {
        uid: string;
        token: {
          admin?: boolean;
        };
      };
    }
  }
}
import axios from "axios";
import * as crypto from "crypto";
import { CallableContext } from "firebase-functions/lib/common/providers/https";

admin.initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((req: Request, res: Response) => {
  logger.info("Hello logs!", { structuredData: true });
  res.send("Hello from Firebase!");
});

interface AadhaarVerificationRequest {
  aadhaarNumber: string;
}

interface AadhaarVerificationResponse {
  success: boolean;
  error?: string;
  data?: any;
}

// Initialize Firestore
const db = admin.firestore();

// UIDAI API configuration
const UIDAI_CONFIG = {
  baseUrl: process.env.UIDAI_API_URL || "",
  apiKey: process.env.UIDAI_API_KEY || "",
  licenseKey: process.env.UIDAI_LICENSE_KEY || "",
};

/**
 * Encrypt data for UIDAI API
 */
function encryptData(data: string, key: string): string {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    "aes-256-gcm",
    Buffer.from(key, "hex"),
    iv
  );
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag();
  return iv.toString("hex") + ":" + encrypted + ":" + authTag.toString("hex");
}

interface Context extends CallableContext {
  auth?: {
    uid: string;
    token: DecodedIdToken;
  };
}

interface FirestoreDoc {
  id: string;
  ref: admin.firestore.DocumentReference;
  data(): admin.firestore.DocumentData;
}

/**
 * Verify Aadhaar details using UIDAI API
 */
export const verifyAadhaar = onRequest(async (req: Request, res: Response) => {
  // Verify authentication
  if (!req.auth) {
    throw new Error("Unauthenticated");
  }

  try {
    const data = req.body as AadhaarVerificationRequest;

    // Validate Aadhaar number format
    if (!data.aadhaarNumber.match(/^\d{12}$/)) {
      throw new Error("Invalid Aadhaar number format");
    }

    // Encrypt Aadhaar number for transmission
    const encryptedAadhaar = encryptData(
      data.aadhaarNumber,
      UIDAI_CONFIG.licenseKey
    );

    // Call UIDAI API
    const response = await axios.post(
      `${UIDAI_CONFIG.baseUrl}/verify`,
      {
        aadhaarNumber: encryptedAadhaar,
        requestId: crypto.randomBytes(16).toString("hex"),
      },
      {
        headers: {
          Authorization: `Bearer ${UIDAI_CONFIG.apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Log verification attempt
    await db.collection("audit_logs").add({
      type: "aadhaar_verification",
      userId: req.auth.uid,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      success: response.data.success,
      maskedAadhaar: `XXXX-XXXX-${data.aadhaarNumber.slice(-4)}`,
    });

    const result: AadhaarVerificationResponse = {
      success: response.data.success,
      data: response.data.success
        ? {
            name: response.data.name,
            gender: response.data.gender,
            yearOfBirth: response.data.yearOfBirth,
            state: response.data.state,
          }
        : undefined,
    };

    res.json(result);
  } catch (error: unknown) {
    logger.error("Aadhaar verification error:", error);

    // Log error
    await db.collection("audit_logs").add({
      type: "aadhaar_verification_error",
      userId: req.auth?.uid,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
      error: error instanceof Error ? error.message : "Unknown error occurred",
      maskedAadhaar: `XXXX-XXXX-${req.body.aadhaarNumber.slice(-4)}`,
    });

    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
});

/**
 * Admin function to get verification logs
 */
export const getVerificationLogs = onRequest(
  async (req: Request, res: Response) => {
    // Verify admin status
    if (!req.auth?.token.admin) {
      res.status(403).json({ error: "Requires admin privileges" });
      return;
    }

    try {
      const logsSnapshot = await db
        .collection("audit_logs")
        .orderBy("timestamp", "desc")
        .limit(100)
        .get();

      const logs = logsSnapshot.docs.map((doc: FirestoreDoc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      res.json(logs);
    } catch (error) {
      logger.error("Error fetching verification logs:", error);
      res.status(500).json({ error: "Failed to fetch verification logs" });
    }
  }
);

/**
 * Cleanup old audit logs (runs daily)
 */
export const cleanupAuditLogs = onRequest(
  async (req: Request, res: Response) => {
    try {
      const thirtyDaysAgo = admin.firestore.Timestamp.fromDate(
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      );

      const oldLogsSnapshot = await db
        .collection("audit_logs")
        .where("timestamp", "<", thirtyDaysAgo)
        .get();

      const batch = db.batch();
      oldLogsSnapshot.docs.forEach((doc: FirestoreDoc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
      logger.info(`Cleaned up ${oldLogsSnapshot.size} old audit logs`);
      res.json({
        message: `Cleaned up ${oldLogsSnapshot.size} old audit logs`,
      });
    } catch (error) {
      logger.error("Error cleaning up audit logs:", error);
      res.status(500).json({ error: "Failed to cleanup audit logs" });
    }
  }
);
