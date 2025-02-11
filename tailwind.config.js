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
        white: "#ffffff",
        black: "#000000",
        primary: {
          50: "#f6d5f7",
          100: "#fbe9d7",
          200: "#b9deed",
        },
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
      backdropBlur: {
        xs: "2px",
        md: "10px",
      },
      animation: {
        "soft-float": "softFloat 20s infinite ease-in-out",
      },
      keyframes: {
        softFloat: {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-20px) scale(1.05)" },
        },
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
    opacity: true,
    backgroundOpacity: true,
    borderOpacity: true,
    textOpacity: true,
  },

  // Enable arbitrary values
  safelist: [
    { pattern: /^bg-.*\/\d+$/ },
    { pattern: /^border-.*\/\d+$/ },
    { pattern: /^text-.*\/\d+$/ },
  ],
};
