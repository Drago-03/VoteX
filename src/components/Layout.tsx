/**
 * Layout Component
 * This is the main layout wrapper that provides the common structure for all pages.
 * It includes the header with navigation, voice control, and footer.
 * The component also handles voice recognition for accessibility.
 */
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Shield, Users, Mic, MicOff, LayoutDashboard } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import PhotoGallery from "./PhotoGallery";
import VisitorCounter from "./VisitorCounter";

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

  // Add language context
  const { currentLanguage, setLanguage, languages } = useLanguage();

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

  // Update the screen reader handler
  const handleScreenReader = () => {
    const text = "Screen reader activated"; // This text will be translated based on language
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLanguage.code;
    window.speechSynthesis.speak(utterance);
  };

  // Handle language change
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
    // Announce language change to screen readers
    const utterance = new SpeechSynthesisUtterance(
      `Language changed to ${
        languages.find((lang) => lang.code === e.target.value)?.name
      }`
    );
    utterance.lang = e.target.value;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary/5 via-white to-secondary/5">
        {/* Government Header */}
        <header className="bg-white shadow-lg border-t-4 border-primary">
          {/* Top Bar */}
          <div className="bg-gray-50 border-b border-gray-200">
            <div className="gov-container flex justify-between items-center py-2">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">
                  Government of India
                </span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-700 font-medium">भारत सरकार</span>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  className="text-sm hover:text-primary transition-colors"
                  onClick={handleScreenReader}
                  aria-label="Activate screen reader"
                >
                  Screen Reader
                </button>
                <select
                  className="bg-transparent border-none text-sm hover:text-primary focus:ring-primary"
                  aria-label="Select language"
                  value={currentLanguage.code}
                  onChange={handleLanguageChange}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.nativeName} ({lang.name})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Main Header */}
          <div className="gov-container py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                {/* Government Emblem and ECI Title */}
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    {/* Ashoka Emblem */}
                    <div className="w-16 h-16 relative hover:scale-105 transition-transform">
                      <svg viewBox="0 0 320 320" className="w-full h-full">
                        <circle
                          cx="160"
                          cy="160"
                          r="155"
                          fill="#13227A"
                          stroke="#F1B821"
                          strokeWidth="5"
                        />
                        <circle
                          cx="160"
                          cy="160"
                          r="140"
                          fill="none"
                          stroke="#F1B821"
                          strokeWidth="2"
                        />
                        <path
                          d="M160 40 L160 280 M40 160 L280 160"
                          stroke="#F1B821"
                          strokeWidth="2"
                        />
                        {/* Simplified Ashoka Chakra */}
                        <circle
                          cx="160"
                          cy="160"
                          r="40"
                          fill="none"
                          stroke="#F1B821"
                          strokeWidth="3"
                        />
                        {/* 24 spokes */}
                        {[...Array(24)].map((_, i) => (
                          <line
                            key={i}
                            x1="160"
                            y1="120"
                            x2="160"
                            y2="200"
                            stroke="#F1B821"
                            strokeWidth="2"
                            transform={`rotate(${i * 15} 160 160)`}
                          />
                        ))}
                      </svg>
                    </div>
                    <span className="text-[10px] font-semibold text-center mt-1 text-primary">
                      सत्यमेव जयते
                    </span>
                  </div>
                  <div>
                    <h1 className="gov-title text-2xl font-bold text-gray-800 hover:text-primary transition-colors">
                      VoteX - Election Commission of India
                      <span className="block text-lg font-semibold text-secondary">
                        भारत निर्वाचन आयोग
                      </span>
                    </h1>
                  </div>
                </div>
              </div>

              {/* Voice Control and Navigation */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsListening(!isListening)}
                  className="p-3 rounded-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  aria-label={
                    isListening ? "Stop voice commands" : "Start voice commands"
                  }
                  aria-pressed={isListening}
                >
                  {isListening ? (
                    <Mic className="h-5 w-5 text-secondary" />
                  ) : (
                    <MicOff className="h-5 w-5 text-gray-600 hover:text-primary" />
                  )}
                </button>

                <Link
                  to={isStaffRoute ? "/" : "/staff"}
                  className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform hover:-translate-y-0.5"
                  aria-label={
                    isStaffRoute
                      ? "Switch to Voter Portal"
                      : "Switch to Staff Dashboard"
                  }
                >
                  {isStaffRoute ? (
                    <>
                      <Users className="h-5 w-5 inline-block mr-2" />
                      <span>Voter Portal</span>
                    </>
                  ) : (
                    <>
                      <LayoutDashboard className="h-5 w-5 inline-block mr-2" />
                      <span>Staff Login</span>
                    </>
                  )}
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="gov-nav border-t border-gray-200" role="navigation">
            <div className="gov-container">
              <ul className="flex space-x-6">
                <li>
                  <Link
                    to="/"
                    className="text-accent hover:text-accent/80 transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-accent hover:text-accent/80 transition"
                  >
                    About ECI
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-accent hover:text-accent/80 transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Voice Recognition Feedback Display */}
        {voiceMessage && (
          <div
            className="fixed bottom-4 right-4 max-w-md p-6 bg-gradient-to-br from-primary/90 to-secondary/90 rounded-2xl border border-white/20 text-white shadow-lg backdrop-blur-xl transform transition-all duration-300 ease-in-out hover:scale-105"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start space-x-3">
              <Mic className="h-5 w-5 text-white/90 animate-pulse" />
              <div>
                <p className="text-sm font-medium">{voiceMessage}</p>
                <p className="text-xs text-white/70 mt-1">
                  Voice command detected
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main id="main-content" className="flex-1" role="main">
          <div className="gov-container">
            <Outlet />
          </div>
        </main>

        {/* Photo Gallery Section */}
        <PhotoGallery />

        {/* Footer */}
        <footer className="gov-footer">
          <div className="gov-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                <address className="not-italic">
                  Election Commission of India
                  <br />
                  Nirvachan Sadan
                  <br />
                  Ashoka Road, New Delhi-110001
                  <br />
                  <a href="tel:+911123052205" className="hover:underline">
                    +91-11-23052205
                  </a>
                  <br />
                  <a
                    href="mailto:support@eci.gov.in"
                    className="hover:underline"
                  >
                    support@eci.gov.in
                  </a>
                </address>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">Important Links</h2>
                <ul className="space-y-2">
                  <li>
                    <a href="https://eci.gov.in" className="hover:underline">
                      ECI Website
                    </a>
                  </li>
                  <li>
                    <Link to="/rti" className="hover:underline">
                      RTI
                    </Link>
                  </li>
                  <li>
                    <Link to="/careers" className="hover:underline">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-4">Legal</h2>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/legal/terms"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/legal/privacy"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/legal/disclaimer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p>
                  © {new Date().getFullYear()} Election Commission of India. All
                  rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                  <VisitorCounter />
                </div>
              </div>
              <p className="mt-2 text-sm text-center">
                Last Updated: {new Date().toLocaleDateString("en-IN")}
              </p>
              <p className="mt-2 text-sm text-center text-gray-500">
                Made with ❤️ by Indie Hub
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
