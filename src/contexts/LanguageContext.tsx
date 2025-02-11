import React, { createContext, useContext, useState, useEffect } from "react";

type Language = {
  code: string;
  name: string;
  nativeName: string;
  direction: "ltr" | "rtl";
};

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (code: string) => void;
  languages: Language[];
  speak: (text: string) => void;
};

const languages: Language[] = [
  { code: "en-US", name: "English", nativeName: "English", direction: "ltr" },
  { code: "hi-IN", name: "Hindi", nativeName: "हिंदी", direction: "ltr" },
  { code: "bn-IN", name: "Bengali", nativeName: "বাংলা", direction: "ltr" },
  { code: "te-IN", name: "Telugu", nativeName: "తెలుగు", direction: "ltr" },
  { code: "mr-IN", name: "Marathi", nativeName: "मराठी", direction: "ltr" },
  { code: "ta-IN", name: "Tamil", nativeName: "தமிழ்", direction: "ltr" },
  { code: "gu-IN", name: "Gujarati", nativeName: "ગુજરાતી", direction: "ltr" },
  { code: "kn-IN", name: "Kannada", nativeName: "ಕನ್ನಡ", direction: "ltr" },
  { code: "ml-IN", name: "Malayalam", nativeName: "മലയാളം", direction: "ltr" },
  { code: "pa-IN", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", direction: "ltr" },
  { code: "or-IN", name: "Odia", nativeName: "ଓଡ଼ିଆ", direction: "ltr" },
  { code: "as-IN", name: "Assamese", nativeName: "অসমীয়া", direction: "ltr" },
];

// Create initial context value
const initialContextValue: LanguageContextType = {
  currentLanguage: languages[0],
  setLanguage: () => {},
  languages: languages,
  speak: () => {},
};

const LanguageContext = createContext<LanguageContextType>(initialContextValue);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(
    languages[0]
  );
  const [isInitialized, setIsInitialized] = useState(false);
  const [speechSynth, setSpeechSynth] = useState<SpeechSynthesis | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (window.speechSynthesis) {
      setSpeechSynth(window.speechSynthesis);

      // Load voices
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };

      // Chrome loads voices asynchronously
      speechSynthesis.onvoiceschanged = loadVoices;
      loadVoices();
    }
  }, []);

  const getFemaleVoice = (langCode: string): SpeechSynthesisVoice | null => {
    // First try to find a female voice for the exact language code
    let voice = voices.find(
      (v) => v.lang === langCode && v.name.toLowerCase().includes("female")
    );

    // If no female voice found, try to find any female voice that matches the language base
    if (!voice) {
      const langBase = langCode.split("-")[0];
      voice = voices.find(
        (v) =>
          v.lang.startsWith(langBase) && v.name.toLowerCase().includes("female")
      );
    }

    // If still no female voice, try to find any voice for the language
    if (!voice) {
      voice = voices.find((v) => v.lang.startsWith(langCode));
    }

    // Fallback to any available voice
    return voice || voices[0] || null;
  };

  const speak = (text: string) => {
    if (speechSynth && voices.length > 0) {
      // Cancel any ongoing speech
      speechSynth.cancel();

      // Create a new utterance
      const utterance = new SpeechSynthesisUtterance(text);

      // Set language
      utterance.lang = currentLanguage.code;

      // Get appropriate voice
      const voice = getFemaleVoice(currentLanguage.code);
      if (voice) {
        utterance.voice = voice;
      }

      // Adjust speech parameters for more natural sound
      utterance.rate = 0.9; // Slightly slower than default
      utterance.pitch = 1.2; // Slightly higher pitch for feminine voice
      utterance.volume = 1.0;

      // Add some expression through pitch and rate variation
      utterance.onboundary = (event) => {
        if (event.name === "word") {
          // Subtle variation in pitch for more natural speech rhythm
          utterance.pitch = 1.2 + Math.random() * 0.2;
          utterance.rate = 0.9 + Math.random() * 0.1;
        }
      };

      // Speak the text
      speechSynth.speak(utterance);
    }
  };

  const setLanguage = (code: string) => {
    try {
      const language = languages.find((lang) => lang.code.startsWith(code));
      if (language) {
        setCurrentLanguage(language);
        document.documentElement.lang = language.code;
        document.documentElement.dir = language.direction;

        // Announce language change in the new language
        const announcement = getLanguageChangeAnnouncement(language.code);
        speak(announcement);

        // Store language preference
        try {
          localStorage.setItem("preferredLanguage", language.code);
        } catch (error) {
          console.warn("Failed to save language preference:", error);
        }
      }
    } catch (error) {
      console.error("Error setting language:", error);
      setCurrentLanguage(languages[0]);
    }
  };

  // Helper function to get language change announcement in the selected language
  const getLanguageChangeAnnouncement = (code: string): string => {
    const announcements: { [key: string]: string } = {
      "en-US": "Language changed to English",
      "hi-IN": "भाषा हिंदी में बदल गई है",
      "bn-IN": "ভাষা বাংলায় পরিবর্তন করা হয়েছে",
      "te-IN": "భాష తెలుగుకి మార్చబడింది",
      "mr-IN": "भाषा मराठी मध्ये बदलली",
      "ta-IN": "மொழி தமிழுக்கு மாற்றப்பட்டது",
      "gu-IN": "ભાષા ગુજરાતીમાં બદલાઈ",
      "kn-IN": "ಭಾಷೆಯನ್ನು ಕನ್ನಡಕ್ಕೆ ಬದಲಾಯಿಸಲಾಗಿದೆ",
      "ml-IN": "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി",
      "pa-IN": "ਭਾਸ਼ਾ ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੀ ਗਈ",
      "or-IN": "ଭାଷା ଓଡ଼ିଆକୁ ପରିବର୍ତ୍ତନ କରାଗଲା",
      "as-IN": "ভাষা অসমীয়ালৈ সলনি কৰা হ'ল",
    };
    return announcements[code] || announcements["en-US"];
  };

  useEffect(() => {
    try {
      // Load saved language preference
      const savedLanguage = localStorage.getItem("preferredLanguage");
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
      setIsInitialized(true);
    } catch (error) {
      console.error("Error loading saved language:", error);
      setIsInitialized(true);
    }
  }, []);

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-900 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        languages,
        speak,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
