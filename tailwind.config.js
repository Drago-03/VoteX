/**
 * Tailwind CSS Configuration
 * Configures the build process and customization options for Tailwind CSS.
 * This file determines which files are processed and how the styling system behaves.
 */

/** @type {import('tailwindcss').Config} */
export default {
  // Files to scan for utility classes
  content: [
    "./index.html", // Process HTML template
    "./src/**/*.{js,ts,jsx,tsx}", // Process all JavaScript/TypeScript files
  ],

  // Theme customization
  theme: {
    extend: {
      colors: {
        primary: "#FF9933", // Deep Saffron (India Flag)
        secondary: "#138808", // India Green (India Flag)
        accent: "#000080", // Navy Blue (Government websites)
        white: "#ffffff",
        black: "#000000",
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        blue: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      boxShadow: {
        gov: "0 2px 4px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        xs: "2px",
        md: "10px",
      },
      animation: {
        spin: "spin 1s linear infinite",
        "soft-float": "softFloat 20s infinite ease-in-out",
        "spin-slow": "spin 30s linear infinite",
      },
      borderWidth: {
        3: "3px",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        softFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
      },
      // Add animation delay utilities
      transitionDelay: {
        200: "200ms",
        400: "400ms",
      },
    },
  },

  // Additional plugins
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],

  // Enable modern features
  future: {
    hoverOnlyWhenSupported: true,
  },

  // Enable all Tailwind features including opacity modifiers
  corePlugins: {
    preflight: true,
  },

  // Enable arbitrary values
  safelist: [
    { pattern: /^bg-.*\/\d+$/ },
    { pattern: /^border-.*\/\d+$/ },
    { pattern: /^text-.*\/\d+$/ },
    "border-t-blue-500",
    "border-t-gray-500",
    "border-2",
    "border-3",
    "border-4",
  ],
};
