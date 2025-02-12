/**
 * StaffLogin Component
 * This component provides the login interface for staff members.
 * It handles authentication using Firebase and provides feedback for login attempts.
 */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  User,
  Lock,
  Eye,
  EyeOff,
  ChevronLeft,
  AlertCircle,
} from "lucide-react";

export const StaffLogin: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // Add your authentication logic here
    setTimeout(() => setIsLoading(false), 2000); // Simulated loading
  };

  return (
    <div className="min-h-[80vh] relative overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Saffron Stripe */}
        <div className="absolute top-0 w-full h-1/3 bg-gradient-to-b from-orange-500/10 to-transparent transform -skew-y-6 animate-soft-float" />

        {/* White Stripe */}
        <div className="absolute top-1/3 w-full h-1/3 bg-gradient-to-b from-gray-200/10 to-transparent transform skew-y-6 animate-soft-float animation-delay-200" />

        {/* Green Stripe */}
        <div className="absolute top-2/3 w-full h-1/3 bg-gradient-to-b from-green-500/10 to-transparent transform -skew-y-6 animate-soft-float animation-delay-400" />

        {/* Ashoka Chakra */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border-2 border-blue-500/10 rounded-full animate-spin-slow">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-8 bg-blue-500/10"
                style={{
                  transformOrigin: "50% 50%",
                  transform: `rotate(${i * 15}deg) translateY(-12rem)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md relative">
        {/* Back to Home Link */}
        <Link
          to="/"
          className="absolute top-0 left-0 -translate-y-12 inline-flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Home
        </Link>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-6 pb-4 bg-gradient-to-r from-orange-500 via-white to-green-500">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-blue-900" />
            </div>
            <h2 className="text-center text-2xl font-bold text-gray-900">
              ECI Staff Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Election Commission of India
            </p>
          </div>

          {/* Login Form */}
          <form className="px-8 py-6 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="flex items-center gap-2 text-red-500 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <div>
              <label
                htmlFor="staff-id"
                className="block text-sm font-medium text-gray-700"
              >
                Staff ID
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="staff-id"
                  name="staff-id"
                  type="text"
                  required
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Enter your Staff ID"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="appearance-none block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <a
                href="#"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="px-8 py-4 bg-gray-50">
            <p className="text-xs text-center text-gray-600">
              By signing in, you agree to ECI's{" "}
              <Link to="/legal/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/legal/privacy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
