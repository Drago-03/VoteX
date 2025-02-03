import React, { useEffect, useState } from 'react';
import { 
  Users, 
  UserCheck, 
  UserX, 
  AlertTriangle, 
  Plus,
  Search,
  RefreshCw
} from 'lucide-react';
import { supabase } from '../lib/supabase';

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

export function StaffDashboard() {
  const [stats, setStats] = useState<VerificationStats>({
    total: 0,
    success: 0,
    failed: 0,
    pending: 0,
  });
  const [voters, setVoters] = useState<Voter[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchStats();
    fetchVoters();
  }, []);

  const fetchStats = async () => {
    try {
      const { data: verificationLogs } = await supabase
        .from('verification_logs')
        .select('status');

      const total = verificationLogs?.length || 0;
      const success = verificationLogs?.filter(log => log.status === 'success').length || 0;
      const failed = verificationLogs?.filter(log => log.status === 'failed').length || 0;

      setStats({
        total,
        success,
        failed,
        pending: total - (success + failed),
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  const fetchVoters = async () => {
    try {
      const { data } = await supabase
        .from('voters')
        .select('*')
        .order('created_at', { ascending: false });

      if (data) {
        setVoters(data);
      }
    } catch (error) {
      console.error('Error fetching voters:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredVoters = voters.filter(voter =>
    voter.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    voter.aadhaar_id.includes(searchQuery) ||
    voter.electoral_roll_number.includes(searchQuery)
  );

  return (
    <div className="space-y-6">
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
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">Aadhaar ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">Electoral Roll</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">Region</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-white/70">Registered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {loading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-white/50">
                    Loading voters...
                  </td>
                </tr>
              ) : filteredVoters.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-white/50">
                    No voters found
                  </td>
                </tr>
              ) : (
                filteredVoters.map((voter) => (
                  <tr key={voter.id} className="hover:bg-white/5 transition">
                    <td className="px-6 py-4 text-white">{voter.full_name}</td>
                    <td className="px-6 py-4 text-white/70">{voter.aadhaar_id}</td>
                    <td className="px-6 py-4 text-white/70">{voter.electoral_roll_number}</td>
                    <td className="px-6 py-4 text-white/70">{voter.region_code}</td>
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
}

function StatCard({ 
  title, 
  value, 
  icon, 
  className 
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