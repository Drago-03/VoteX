/**
 * Main Application Component
 * This is the root component that handles all the routing and page structure of the application.
 * It sets up the main navigation paths and protects certain routes that require authentication.
 */
import React, { Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import VoterVerification from "./components/VoterVerification";
import { StaffLogin } from "./components/StaffLogin";
import { StaffDashboard } from "./components/StaffDashboard";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./contexts/LanguageContext";
import LegalDocument from "./pages/LegalDocument";
import RTI from "./pages/RTI";
import Careers from "./pages/Careers";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import adminService from "./services/AdminService";

// Loading component for Suspense fallback
const Loading: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto"></div>
      <p className="mt-4 text-white">Loading...</p>
    </div>
  </div>
);

// Protected Route component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/staff-login" />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  useEffect(() => {
    // Initialize admin user when the app starts
    adminService.initializeAdminUser().catch(console.error);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<VoterVerification />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="staff" element={<StaffLogin />} />
              <Route path="legal/:documentType" element={<LegalDocument />} />
              <Route path="rti" element={<RTI />} />
              <Route path="careers" element={<Careers />} />
            </Route>
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <StaffDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
};

export default App;
