/**
 * Layout Component
 * This is the main layout wrapper that provides the common structure for all pages.
 * It includes the header with navigation, voice control, and footer.
 * The component also handles voice recognition for accessibility.
 */
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Shield, Users, Mic, MicOff, LayoutDashboard } from "lucide-react";

const Layout = () => {
  // Hooks for navigation and location tracking
  const location = useLocation();
  const navigate = useNavigate();

  // State for voice recognition features
  const [isListening, setIsListening] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState("");

  // Check if we're on a staff-related page
  const isStaffRoute =
    location.pathname.includes("/staff") ||
    location.pathname.includes("/dashboard");

  /**
   * Voice Recognition Setup
   * This effect handles the setup and cleanup of voice recognition functionality.
   * It allows users to interact with the application using voice commands.
   */
  useEffect(() => {
    // Check if browser supports voice recognition
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true; // Keep listening
      recognition.interimResults = true; // Get results as user speaks

      // Process voice recognition results
      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join("");
        setVoiceMessage(transcript);
        // Future enhancement: Add voice command processing here
      };

      // Start/stop recognition based on isListening state
      if (isListening) {
        recognition.start();
      }

      // Cleanup: stop recognition when component unmounts
      return () => {
        recognition.stop();
      };
    }
  }, [isListening]);

  /**
   * Handle navigation between voter portal and staff dashboard
   */
  const handleDashboardClick = () => {
    if (!isStaffRoute) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        <header
          className="sticky top-0 z-50 backdrop-blur-xl bg-black/10 border-b border-white/10"
          role="banner"
        >
          <div className="center-container">
            <nav
              className="flex items-center justify-between py-4"
              role="navigation"
              aria-label="Main navigation"
            >
              {/* Logo and Title */}
              <Link
                to="/"
                className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-105 focus-ring"
                aria-label="VoteX Home"
              >
                <Shield
                  className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors"
                  aria-hidden="true"
                />
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    VoteX
                  </h1>
                  <p className="text-sm text-blue-200/80">
                    AI-Powered Voting System
                  </p>
                </div>
              </Link>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-6">
                {/* Voice Control Toggle */}
                <button
                  onClick={() => setIsListening(!isListening)}
                  className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus-ring ${
                    isListening
                      ? "bg-green-500/20 hover:bg-green-500/30 ring-2 ring-green-500/50"
                      : "bg-white/5 hover:bg-white/10"
                  }`}
                  aria-label={
                    isListening ? "Stop voice commands" : "Start voice commands"
                  }
                  aria-pressed={isListening ? "true" : "false"}
                >
                  {isListening ? (
                    <Mic
                      className="h-6 w-6 text-green-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <MicOff
                      className="h-6 w-6 text-white/70"
                      aria-hidden="true"
                    />
                  )}
                </button>

                {/* Portal Switch Button */}
                <Link
                  to={isStaffRoute ? "/" : "/staff"}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600/80 to-purple-600/80 hover:from-blue-500 hover:to-purple-500 text-white flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20 focus-ring"
                  aria-label={
                    isStaffRoute
                      ? "Switch to Voter Portal"
                      : "Switch to Staff Dashboard"
                  }
                >
                  {isStaffRoute ? (
                    <>
                      <Users className="h-5 w-5" aria-hidden="true" />
                      <span className="font-medium">Voter Portal</span>
                    </>
                  ) : (
                    <>
                      <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
                      <span className="font-medium">Staff Dashboard</span>
                    </>
                  )}
                </Link>
              </div>
            </nav>
          </div>
        </header>

        {/* Voice Recognition Feedback Display */}
        {voiceMessage && (
          <div
            className="fixed bottom-4 right-4 max-w-md p-4 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 text-white shadow-lg shadow-purple-500/20 animate-fadeIn"
            role="status"
            aria-live="polite"
          >
            <p className="text-sm">{voiceMessage}</p>
          </div>
        )}

        {/* Main Content Area */}
        <main id="main-content" className="flex-1" role="main">
          <div className="center-container py-8">
            <Outlet />
          </div>
        </main>

        {/* Footer Section */}
        <footer
          className="relative z-10 border-t border-white/10 backdrop-blur-xl bg-black/10"
          role="contentinfo"
        >
          <div className="center-container py-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Link
                to="/"
                className="flex items-center space-x-2 mb-2 focus-ring"
                aria-label="VoteX Home"
              >
                <Shield className="h-8 w-8 text-blue-400" aria-hidden="true" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                  VoteX
                </span>
              </Link>
              <nav
                className="flex items-center space-x-6 text-white/40"
                aria-label="Footer navigation"
              >
                <Link
                  to="/about"
                  className="hover:text-white/60 transition-colors focus-ring"
                >
                  About
                </Link>
                <Link
                  to="/privacy"
                  className="hover:text-white/60 transition-colors focus-ring"
                >
                  Privacy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-white/60 transition-colors focus-ring"
                >
                  Terms
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-white/60 transition-colors focus-ring"
                >
                  Contact
                </Link>
              </nav>
              <p className="text-white/40 text-sm">
                © 2025{" "}
                <span className="tracking-widest font-semibold text-white/60">
                  INDIE HUB
                </span>
                . All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
