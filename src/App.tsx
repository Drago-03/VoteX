/**
 * Main Application Component
 * This is the root component that handles all the routing and page structure of the application.
 * It sets up the main navigation paths and protects certain routes that require authentication.
 */
import React, { Suspense } from "react";
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

// Loading component for Suspense fallback
const Loading: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto"></div>
      <p className="mt-4 text-white">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
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
