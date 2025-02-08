import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { VoterVerification } from "./components/VoterVerification";
import { StaffLogin } from "./components/StaffLogin";
import { AdminDashboard } from "./pages/Dashboard/AdminDashboard";
import { useAuth } from "./hooks/useAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<VoterVerification />} />
          <Route path="staff" element={<StaffLogin />} />
        </Route>
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

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/staff" replace />;
  }

  return <>{children}</>;
}

export default App;
