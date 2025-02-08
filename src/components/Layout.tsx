import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Shield, Users, Mic, MicOff, LayoutDashboard } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [voiceMessage, setVoiceMessage] = useState("");
  const isStaffRoute =
    location.pathname.includes("/staff") ||
    location.pathname.includes("/dashboard");

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join("");
        setVoiceMessage(transcript);
        // Here you can add logic to process voice commands
      };

      if (isListening) {
        recognition.start();
      }

      return () => {
        recognition.stop();
      };
    }
  }, [isListening]);

  const handleDashboardClick = () => {
    if (!isStaffRoute) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-filter backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <Shield className="h-10 w-10 text-blue-400" />
            <div>
              <h1 className="text-2xl font-bold text-white">VoteX</h1>
              <p className="text-xs text-blue-200">AI-Powered Voting System</p>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsListening(!isListening)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
              title={
                isListening ? "Stop voice commands" : "Start voice commands"
              }
            >
              {isListening ? (
                <Mic className="h-5 w-5 text-green-400" />
              ) : (
                <MicOff className="h-5 w-5 text-white/70" />
              )}
            </button>

            <Link
              to={isStaffRoute ? "/" : "/staff"}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center space-x-2 transition"
            >
              {isStaffRoute ? (
                <>
                  <Users className="h-5 w-5" />
                  <span>Voter Portal</span>
                </>
              ) : (
                <>
                  <LayoutDashboard className="h-5 w-5" />
                  <span>Staff Dashboard</span>
                </>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Voice Message Display */}
      {voiceMessage && (
        <div className="fixed bottom-4 right-4 max-w-md p-4 bg-white/10 backdrop-filter backdrop-blur-lg rounded-lg border border-white/20 text-white">
          <p className="text-sm">{voiceMessage}</p>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white/5 border-t border-white/10 py-6">
        <div className="container mx-auto px-4 text-center text-white/60">
          <p>© 2025 @indiehub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
