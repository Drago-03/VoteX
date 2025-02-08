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
      // Add custom theme extensions here
    },
  },

  // Additional plugins
  plugins: [],
};
