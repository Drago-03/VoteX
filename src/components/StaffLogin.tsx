/**
 * StaffLogin Component
 * This component provides the login interface for staff members.
 * It handles authentication using Firebase and provides feedback for login attempts.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/auth";

interface StaffLoginProps {}

export const StaffLogin: React.FC<StaffLoginProps> = () => {
  // Navigation hook for redirecting after login
  const navigate = useNavigate();

  // Form state management
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  // Error and loading state management
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  /**
   * Form Submission Handler
   * Attempts to authenticate the user with provided credentials
   *
   * @param e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Attempt to sign in with provided credentials
      await signIn(formData.email, formData.password);
      // Redirect to dashboard on successful login
      navigate("/dashboard");
    } catch (error) {
      // Display error message if login fails
      setError(error instanceof Error ? error.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Login Card with Glassmorphism Effect */}
      <div className="bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Staff Login</h2>

        {/* Error Message Display */}
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input Field */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
