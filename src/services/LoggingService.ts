import { db, COLLECTIONS } from "../firebase";
import {
  collection,
  query,
  where,
  orderBy,
  getDocs,
  Timestamp,
} from "firebase/firestore";

export interface LogEntry {
  id: string;
  type: "aadhaar_verification" | "biometric_verification" | "hardware_error";
  timestamp: Date;
  success: boolean;
  voter_id?: string;
  aadhaar_id?: string;
  error?: string;
  biometric_verified?: boolean;
  photo_verified?: boolean;
  staff_id?: string;
  location?: string;
}

export interface LogFilter {
  startDate?: Date;
  endDate?: Date;
  type?: string;
  success?: boolean;
}

class LoggingService {
  private static instance: LoggingService;

  private constructor() {}

  public static getInstance(): LoggingService {
    if (!LoggingService.instance) {
      LoggingService.instance = new LoggingService();
    }
    return LoggingService.instance;
  }

  public async getVerificationLogs(filter?: LogFilter): Promise<LogEntry[]> {
    try {
      let q = query(
        collection(db, COLLECTIONS.AUDIT_LOGS),
        orderBy("timestamp", "desc")
      );

      // Apply filters
      if (filter) {
        if (filter.startDate) {
          q = query(
            q,
            where("timestamp", ">=", Timestamp.fromDate(filter.startDate))
          );
        }
        if (filter.endDate) {
          q = query(
            q,
            where("timestamp", "<=", Timestamp.fromDate(filter.endDate))
          );
        }
        if (filter.type) {
          q = query(q, where("type", "==", filter.type));
        }
        if (filter.success !== undefined) {
          q = query(q, where("success", "==", filter.success));
        }
      }

      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp.toDate(),
      })) as LogEntry[];
    } catch (error) {
      console.error("Error fetching verification logs:", error);
      throw new Error("Failed to fetch verification logs");
    }
  }

  public async getFailureStatistics(): Promise<{
    total: number;
    biometricFailures: number;
    photoFailures: number;
    hardwareErrors: number;
  }> {
    try {
      const logs = await this.getVerificationLogs({ success: false });

      return {
        total: logs.length,
        biometricFailures: logs.filter(
          (log) =>
            log.type === "biometric_verification" && !log.biometric_verified
        ).length,
        photoFailures: logs.filter(
          (log) => log.type === "aadhaar_verification" && !log.photo_verified
        ).length,
        hardwareErrors: logs.filter((log) => log.type === "hardware_error")
          .length,
      };
    } catch (error) {
      console.error("Error getting failure statistics:", error);
      throw new Error("Failed to get failure statistics");
    }
  }
}

export default LoggingService.getInstance();
