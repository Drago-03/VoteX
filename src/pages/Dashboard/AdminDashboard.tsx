/**
 * AdminDashboard Component
 * This is the main dashboard interface for staff members.
 * It displays voter statistics, allows searching and managing voter records,
 * and provides real-time updates from the database.
 */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import { auth } from "../../firebase";
import { logOut } from "../../services/auth";
import {
  Users,
  UserCheck,
  UserX,
  AlertTriangle,
  Plus,
  Search,
  RefreshCw,
} from "lucide-react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import "./Dashboard.css";

// Type definitions for data structures
type VerificationStats = {
  total: number; // Total number of verification attempts
  success: number; // Successful verifications
  failed: number; // Failed verifications
  pending: number; // Pending verifications
};

type Voter = {
  id: string; // Unique identifier
  full_name: string; // Voter's full name
  aadhaar_id: string; // Aadhaar card number
  electoral_roll_number: string; // Electoral roll reference
  region_code: string; // Geographic region code
  created_at: string; // Registration timestamp
};

export function AdminDashboard() {
  // Navigation and authentication state
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Dashboard data state
  const [stats, setStats] = useState<VerificationStats>({
    total: 0,
    success: 0,
    failed: 0,
    pending: 0,
  });
  const [voters, setVoters] = useState<Voter[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  /**
   * Authentication Check
   * Ensures only authenticated users can access the dashboard
   */
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
      if (!user) {
        navigate("/staff");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  /**
   * Data Loading
   * Fetches initial statistics and voter data when component mounts
   */
  useEffect(() => {
    fetchStats();
    fetchVoters();
  }, []);

  /**
   * Fetch Verification Statistics
   * Retrieves and calculates verification attempt statistics from the database
   */
  const fetchStats = async () => {
    try {
      const verificationLogsRef = collection(db, "verification_logs");
      const querySnapshot = await getDocs(verificationLogsRef);
      const verificationLogs = querySnapshot.docs.map((doc) => doc.data());

      // Calculate statistics
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

  /**
   * Fetch Voter Records
   * Retrieves the list of registered voters from the database
   */
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
    }
  };

  /**
   * Handle User Logout
   * Logs out the current user and redirects to the staff login page
   */
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/staff");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  // Show loading spinner while initializing
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!user) {
    return null;
  }

  // Filter voters based on search query
  const filteredVoters = voters.filter(
    (voter) =>
      voter.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      voter.aadhaar_id.includes(searchQuery) ||
      voter.electoral_roll_number.includes(searchQuery)
  );

  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <nav className="dashboard-nav">
        <div className="logo-container">
          <img
            src="/Dashboard/logo.png"
            alt="Logo"
            className="dashboard-logo"
          />
          <span>Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white/70">{user.email}</span>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="dashboard-main">
        {/* Statistics Overview */}
        <div className="dashboard-grid">
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

        {/* Search and Actions Bar */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mt-8">
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
        <div className="bg-white/5 rounded-lg overflow-hidden mt-8">
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
                {filteredVoters.map((voter) => (
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

/**
 * StatCard Component
 * Displays a single statistic with an icon and title
 */
function StatCard({
  title,
  value,
  icon,
  className,
}: {
  title: string; // Title of the statistic
  value: number; // Numerical value to display
  icon: React.ReactNode; // Icon component to show
  className?: string; // Additional styling classes
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
