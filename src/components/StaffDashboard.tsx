/**
 * StaffDashboard Component
 * This component provides the main interface for staff members to manage voter records
 * and view verification statistics.
 */

import React, { useEffect, useState } from "react";
import {
  Users,
  UserCheck,
  UserX,
  AlertTriangle,
  Plus,
  Search,
  RefreshCw,
  AlertCircle,
  Calendar,
  Filter,
  CheckCircle,
  UserPlus,
  Trash2,
  UserCog,
} from "lucide-react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import type { VerificationLog } from "../types/firebase";
import loggingService, {
  LogEntry,
  LogFilter,
} from "../services/LoggingService";
import { LoadingSpinner } from "./LoadingSpinner";
import adminService, { AdminUser } from "../services/AdminService";

type VerificationStats = {
  total: number;
  success: number;
  failed: number;
  pending: number;
};

type Voter = {
  id: string;
  full_name: string;
  aadhaar_id: string;
  electoral_roll_number: string;
  region_code: string;
  created_at: string;
};

interface UserManagementState {
  users: AdminUser[];
  isAddingUser: boolean;
  newUser: {
    email: string;
    password: string;
    displayName: string;
  };
}

interface StaffDashboardProps {}

export const StaffDashboard: React.FC<StaffDashboardProps> = () => {
  const [stats, setStats] = useState<VerificationStats>({
    total: 0,
    success: 0,
    failed: 0,
    pending: 0,
  });
  const [voters, setVoters] = useState<Voter[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [userState, setUserState] = useState<UserManagementState>({
    users: [],
    isAddingUser: false,
    newUser: {
      email: "",
      password: "",
      displayName: "",
    },
  });

  const [filter, setFilter] = useState<LogFilter>({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // Last 7 days
    endDate: new Date(),
  });

  useEffect(() => {
    fetchStats();
    fetchVoters();
    fetchLogs();
    fetchUsers();
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "verification_logs"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newLogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as VerificationLog[];
      setLogs(newLogs);
    });

    return () => unsubscribe();
  }, []);

  const fetchStats = async () => {
    try {
      const verificationLogsRef = collection(db, "verification_logs");
      const querySnapshot = await getDocs(verificationLogsRef);
      const verificationLogs = querySnapshot.docs.map((doc) => doc.data());

      const total = verificationLogs.length;
      const success = verificationLogs.filter(
        (log) => (log as { status: string }).status === "success"
      ).length;
      const failed = verificationLogs.filter(
        (log) => (log as { status: string }).status === "failed"
      ).length;

      setStats({
        total,
        success,
        failed,
        pending: total - (success + failed),
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const fetchVoters = async () => {
    try {
      const votersRef = collection(db, "voters");
      const q = query(votersRef, orderBy("created_at", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Voter[];

      setVoters(data);
    } catch (error) {
      console.error("Error fetching voters:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedLogs = await loggingService.getVerificationLogs(filter);
      setLogs(fetchedLogs);
      const statistics = await loggingService.getFailureStatistics();
      setStats(statistics);
    } catch (error) {
      setError("Failed to fetch verification logs");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const users = await adminService.getAllUsers();
      setUserState((prev) => ({ ...prev, users }));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleFilterChange = (updates: Partial<LogFilter>) => {
    setFilter((prev) => ({ ...prev, ...updates }));
  };

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await adminService.createStaffUser(
        userState.newUser.email,
        userState.newUser.password,
        userState.newUser.displayName
      );
      setUserState((prev) => ({
        ...prev,
        isAddingUser: false,
        newUser: { email: "", password: "", displayName: "" },
      }));
      fetchUsers();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const handleDeleteUser = async (uid: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await adminService.deleteUser(uid);
        fetchUsers();
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  const handleUpdateRole = async (uid: string, newRole: "admin" | "staff") => {
    try {
      await adminService.updateUserRole(uid, newRole);
      fetchUsers();
    } catch (error) {
      console.error("Error updating user role:", error);
    }
  };

  const filteredVoters = voters.filter(
    (voter) =>
      voter.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      voter.aadhaar_id.includes(searchQuery) ||
      voter.electoral_roll_number.includes(searchQuery)
  );

  const renderUserManagement = () => (
    <div className="bg-gray-800/50 rounded-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">User Management</h2>
        <button
          onClick={() =>
            setUserState((prev) => ({ ...prev, isAddingUser: true }))
          }
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          <UserPlus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {userState.isAddingUser && (
        <form
          onSubmit={handleAddUser}
          className="space-y-4 bg-gray-700/50 p-4 rounded-lg"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Display Name
            </label>
            <input
              type="text"
              value={userState.newUser.displayName}
              onChange={(e) =>
                setUserState((prev) => ({
                  ...prev,
                  newUser: { ...prev.newUser, displayName: e.target.value },
                }))
              }
              className="w-full bg-gray-700 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={userState.newUser.email}
              onChange={(e) =>
                setUserState((prev) => ({
                  ...prev,
                  newUser: { ...prev.newUser, email: e.target.value },
                }))
              }
              className="w-full bg-gray-700 rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Password</label>
            <input
              type="password"
              value={userState.newUser.password}
              onChange={(e) =>
                setUserState((prev) => ({
                  ...prev,
                  newUser: { ...prev.newUser, password: e.target.value },
                }))
              }
              className="w-full bg-gray-700 rounded px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() =>
                setUserState((prev) => ({ ...prev, isAddingUser: false }))
              }
              className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
            >
              Add User
            </button>
          </div>
        </form>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-700/50">
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Role</th>
              <th className="px-4 py-3 text-left">Created</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {userState.users.map((user) => (
              <tr key={user.uid} className="hover:bg-gray-700/30">
                <td className="px-4 py-3">{user.displayName}</td>
                <td className="px-4 py-3">{user.email}</td>
                <td className="px-4 py-3">
                  <select
                    value={user.role}
                    onChange={(e) =>
                      handleUpdateRole(
                        user.uid,
                        e.target.value as "admin" | "staff"
                      )
                    }
                    className="bg-gray-700 rounded px-2 py-1"
                  >
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  {user.createdAt.toLocaleDateString()}
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDeleteUser(user.uid)}
                    className="p-2 text-red-400 hover:text-red-300 transition-colors"
                    title="Delete User"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Verification Logs</h1>
          <button
            onClick={fetchLogs}
            className="p-2 hover:bg-gray-700 rounded-full transition-colors"
            title="Refresh"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Total Failures"
            value={stats.total}
            icon={<AlertTriangle className="w-6 h-6 text-red-400" />}
          />
          <StatCard
            title="Biometric Failures"
            value={stats.biometricFailures}
            icon={<AlertTriangle className="w-6 h-6 text-orange-400" />}
          />
          <StatCard
            title="Photo Failures"
            value={stats.photoFailures}
            icon={<AlertTriangle className="w-6 h-6 text-yellow-400" />}
          />
          <StatCard
            title="Hardware Errors"
            value={stats.hardwareErrors}
            icon={<AlertTriangle className="w-6 h-6 text-purple-400" />}
          />
        </div>

        {/* Filters */}
        <div className="bg-gray-800/50 p-4 rounded-lg space-y-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={filter.startDate?.toISOString().split("T")[0]}
                onChange={(e) =>
                  handleFilterChange({ startDate: new Date(e.target.value) })
                }
                className="w-full bg-gray-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={filter.endDate?.toISOString().split("T")[0]}
                onChange={(e) =>
                  handleFilterChange({ endDate: new Date(e.target.value) })
                }
                className="w-full bg-gray-700 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Type</label>
              <select
                value={filter.type || ""}
                onChange={(e) =>
                  handleFilterChange({ type: e.target.value || undefined })
                }
                className="w-full bg-gray-700 rounded px-3 py-2"
              >
                <option value="">All Types</option>
                <option value="aadhaar_verification">
                  Aadhaar Verification
                </option>
                <option value="biometric_verification">
                  Biometric Verification
                </option>
                <option value="hardware_error">Hardware Error</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Status</label>
              <select
                value={
                  filter.success === undefined ? "" : filter.success.toString()
                }
                onChange={(e) =>
                  handleFilterChange({
                    success:
                      e.target.value === ""
                        ? undefined
                        : e.target.value === "true",
                  })
                }
                className="w-full bg-gray-700 rounded px-3 py-2"
              >
                <option value="">All Status</option>
                <option value="true">Success</option>
                <option value="false">Failure</option>
              </select>
            </div>
          </div>
        </div>

        {/* Logs Table */}
        {loading ? (
          <div className="flex justify-center py-8">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <div className="bg-red-500/20 text-red-400 p-4 rounded-lg flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            <span>{error}</span>
          </div>
        ) : (
          <div className="bg-gray-800/50 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700/50">
                  <th className="px-4 py-3 text-left">Timestamp</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Voter ID</th>
                  <th className="px-4 py-3 text-left">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-700/30">
                    <td className="px-4 py-3">
                      {log.timestamp.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <span className="capitalize">
                        {log.type.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge success={log.success} />
                    </td>
                    <td className="px-4 py-3">{log.voter_id || "-"}</td>
                    <td className="px-4 py-3">
                      {log.error ? (
                        <span className="text-red-400">{log.error}</span>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Add User Management Section */}
        {renderUserManagement()}
      </div>
    </div>
  );
};

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800/50 p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <span className="text-gray-400">{title}</span>
        {icon}
      </div>
      <div className="mt-2 text-2xl font-semibold">{value}</div>
    </div>
  );
}

const StatusBadge: React.FC<{ success: boolean }> = ({ success }) => (
  <span
    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm ${
      success ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"
    }`}
  >
    {success ? (
      <>
        <CheckCircle className="w-4 h-4" />
        Success
      </>
    ) : (
      <>
        <AlertTriangle className="w-4 h-4" />
        Failed
      </>
    )}
  </span>
);
