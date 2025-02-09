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
  const [, setLogs] = useState<VerificationLog[]>([]);

  useEffect(() => {
    fetchStats();
    fetchVoters();
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

  const filteredVoters = voters.filter(
    (voter) =>
      voter.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      voter.aadhaar_id.includes(searchQuery) ||
      voter.electoral_roll_number.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6">Staff Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Recent Verifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <UserCheck className="h-5 w-5 text-green-400" />
                  <span>Successful Verification</span>
                </div>
                <span className="text-sm text-white/60">2 minutes ago</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <span>Failed Verification</span>
                </div>
                <span className="text-sm text-white/60">5 minutes ago</span>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-green-400">85%</div>
                <div className="text-sm text-white/60">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">150</div>
                <div className="text-sm text-white/60">Total Verifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard
          title="Total Voters"
          value={stats.total}
          icon={<Users className="h-6 w-6" />}
          className="bg-blue-500/10 text-blue-500"
        />
        <StatCard
          title="Verified"
          value={stats.success}
          icon={<UserCheck className="h-6 w-6" />}
          className="bg-green-500/10 text-green-500"
        />
        <StatCard
          title="Failed"
          value={stats.failed}
          icon={<UserX className="h-6 w-6" />}
          className="bg-red-500/10 text-red-500"
        />
        <StatCard
          title="Pending"
          value={stats.pending}
          icon={<AlertTriangle className="h-6 w-6" />}
          className="bg-yellow-500/10 text-yellow-500"
        />
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
          <input
            type="text"
            placeholder="Search voters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={fetchVoters}
            className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center space-x-2 transition"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Refresh</span>
          </button>
          <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white flex items-center space-x-2 transition">
            <Plus className="h-5 w-5" />
            <span>Add Voter</span>
          </button>
        </div>
      </div>

      {/* Voters Table */}
      <div className="bg-white/5 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">
                  Aadhaar ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">
                  Electoral Roll
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">
                  Region
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">
                  Registered
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-white/50"
                  >
                    Loading voters...
                  </td>
                </tr>
              ) : filteredVoters.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-white/50"
                  >
                    No voters found
                  </td>
                </tr>
              ) : (
                filteredVoters.map((voter) => (
                  <tr key={voter.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 text-white">{voter.full_name}</td>
                    <td className="px-6 py-4 text-white/70">
                      {voter.aadhaar_id}
                    </td>
                    <td className="px-6 py-4 text-white/70">
                      {voter.electoral_roll_number}
                    </td>
                    <td className="px-6 py-4 text-white/70">
                      {voter.region_code}
                    </td>
                    <td className="px-6 py-4 text-white/70">
                      {new Date(voter.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function StatCard({
  title,
  value,
  icon,
  className,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-6 rounded-lg ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-70">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}
