import React, { useState } from 'react';
import { Shield, Users, UserCheck, AlertCircle, Camera, Fingerprint } from 'lucide-react';
import { StaffDashboard } from './components/StaffDashboard';
import { auth } from './lib/firebase';
import { db } from './lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

type VerificationStatus = 'idle' | 'processing' | 'success' | 'failed';

function App() {
  const [isStaffPortal, setIsStaffPortal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleVerification = async () => {
    setVerificationStatus('processing');
    try {
      // Simulated API calls to Vision AI and Aadhaar API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const success = Math.random() > 0.5; // Simulate success/failure
      
      // Log the verification attempt using Firestore
      await addDoc(collection(db, 'verification_logs'), {
        verification_type: 'face',
        status: success ? 'success' : 'failed',
        error_message: success ? null : 'Facial recognition failed',
        timestamp: new Date()
      });
      
      setVerificationStatus(success ? 'success' : 'failed');
      if (!success) {
        setErrorMessage('Facial recognition failed. Please try again or seek staff assistance.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationStatus('failed');
      setErrorMessage('An error occurred during verification. Please try again.');
    }
  };

  const handleStaffLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      if (userCredential.user) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials');
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">VoteX</h1>
          </div>
          <button
            onClick={() => {
              setIsStaffPortal(!isStaffPortal);
              setIsAuthenticated(false);
            }}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center space-x-2 transition"
          >
            <Users className="h-5 w-5" />
            <span>{isStaffPortal ? 'Voter Portal' : 'Staff Portal'}</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {isStaffPortal ? (
          isAuthenticated ? (
            <StaffDashboard />
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Staff Login</h2>
                
                <form onSubmit={handleStaffLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Username</label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your username"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          )
        ) : (
          <VoterVerification
            status={verificationStatus}
            errorMessage={errorMessage}
            onVerify={handleVerification}
          />
        )}
      </main>
    </div>
  );
}

function VoterVerification({ 
  status, 
  errorMessage, 
  onVerify 
}: { 
  status: VerificationStatus;
  errorMessage: string;
  onVerify: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Voter Verification</h2>
        
        <div className="space-y-6">
          {status === 'idle' && (
            <div className="text-center space-y-4">
              <p className="text-lg">Please stand in front of the camera and place your thumb on the scanner</p>
              <div className="flex justify-center space-x-4">
                <div className="p-4 bg-white/5 rounded-lg flex flex-col items-center">
                  <Camera className="h-8 w-8 mb-2" />
                  <span>Camera Ready</span>
                </div>
                <div className="p-4 bg-white/5 rounded-lg flex flex-col items-center">
                  <Fingerprint className="h-8 w-8 mb-2" />
                  <span>Scanner Ready</span>
                </div>
              </div>
              <button
                onClick={onVerify}
                className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
              >
                Start Verification
              </button>
            </div>
          )}

          {status === 'processing' && (
            <div className="text-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto" />
              <p>Processing verification...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center space-y-4">
              <UserCheck className="h-16 w-16 text-green-400 mx-auto" />
              <p className="text-xl font-semibold text-green-400">Verification Successful</p>
              <p>You may proceed to the voting booth</p>
            </div>
          )}

          {status === 'failed' && (
            <div className="text-center space-y-4">
              <AlertCircle className="h-16 w-16 text-red-400 mx-auto" />
              <p className="text-xl font-semibold text-red-400">Verification Failed</p>
              <p>{errorMessage}</p>
              <button
                onClick={onVerify}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;