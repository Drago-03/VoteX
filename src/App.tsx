/**
 * Main Application Component
 * This is the root component that handles all the routing and page structure of the application.
 * It sets up the main navigation paths and protects certain routes that require authentication.
 */
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { VoterVerification } from "./components/VoterVerification";
import { StaffLogin } from "./components/StaffLogin";
import { AdminDashboard } from "./pages/Dashboard/AdminDashboard";
import { useAuth } from "./hooks/useAuth";

function App() {
  return (
    // BrowserRouter enables navigation between different pages
    <BrowserRouter>
      {/* Routes define all possible paths in the application */}
      <Routes>
        {/* Main layout wrapper that includes header and footer */}
        <Route path="/" element={<Layout />}>
          {/* Home page - Voter verification interface */}
          <Route index element={<VoterVerification />} />
          {/* Staff login page */}
          <Route path="staff" element={<StaffLogin />} />
        </Route>
        {/* Protected dashboard route - only accessible after login */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

/**
 * ProtectedRoute Component
 * This component ensures that certain pages are only accessible to authenticated users.
 * If a user tries to access these pages without logging in, they will be redirected to the login page.
 */
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // Check if user is logged in
  const { isAuthenticated } = useAuth();

  // If not logged in, redirect to staff login page
  if (!isAuthenticated) {
    return <Navigate to="/staff" replace />;
  }

  // If logged in, show the protected content
  return <>{children}</>;
}

export default App;
