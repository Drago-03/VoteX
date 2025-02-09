/**
 * ProtectedRoute Component
 * This component ensures that certain pages are only accessible to authenticated users.
 * If a user tries to access these pages without logging in, they will be redirected to the login page.
 */
import React, { memo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  /** Optional redirect path when user is not authenticated */
  redirectPath?: string;
  /** Optional roles required to access this route */
  requiredRoles?: string[];
}

/**
 * Loading spinner component for authentication states
 */
const LoadingSpinner: React.FC = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto"></div>
      <p className="mt-4 text-white">Loading...</p>
    </div>
  </div>
));

LoadingSpinner.displayName = "LoadingSpinner";

/**
 * Protected Route Component
 * Handles authentication, loading states, and role-based access control
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectPath = "/staff",
  requiredRoles = [],
}) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  // Show loading indicator while checking authentication
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    // Save the attempted URL for redirecting after login
    const returnUrl = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`${redirectPath}?returnUrl=${returnUrl}`} replace />;
  }

  // Check for required roles if specified
  if (requiredRoles.length > 0 && user?.roles) {
    const hasRequiredRole = requiredRoles.some((role) =>
      user.roles?.includes(role)
    );
    if (!hasRequiredRole) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
            <p>You don't have the required permissions to access this page.</p>
          </div>
        </div>
      );
    }
  }

  // Render protected content if authenticated and authorized
  return <>{children}</>;
};

export default memo(ProtectedRoute);
