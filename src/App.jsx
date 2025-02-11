/**
 * Main Application Component
 * This is the root component that handles all the routing and page structure of the application.
 * It sets up the main navigation paths and protects certain routes that require authentication.
 */
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import VoterVerification from "./components/VoterVerification";
import { StaffLogin } from "./components/StaffLogin";
import { StaffDashboard } from "./components/StaffDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Loading component for Suspense fallback
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto"></div>
      <p className="mt-4 text-white">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Main layout wrapper that includes header and footer */}
          <Route path="/" element={<Layout />}>
            {/* Home page - Voter verification interface */}
            <Route index element={<VoterVerification />} />
            {/* About ECI page */}
            <Route path="about" element={<About />} />
            {/* Contact page */}
            <Route path="contact" element={<Contact />} />
            {/* Staff login page */}
            <Route path="staff" element={<StaffLogin />} />
          </Route>
          {/* Protected dashboard route - only accessible after login */}
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
  );
}

export default App;
