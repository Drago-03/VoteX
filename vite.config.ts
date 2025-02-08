/**
 * Vite Configuration
 * Sets up the development server and build process for the application.
 * Configures plugins, server options, and build optimizations.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Enable React support with Fast Refresh
  plugins: [react()],

  // Project root directory
  root: "./",

  // Build output configuration
  build: {
    outDir: "dist", // Output directory for production build
  },

  // Development server settings
  server: {
    port: 3000, // Default port for development server
  },

  // Dependency optimization
  optimizeDeps: {
    exclude: ["lucide-react"], // Exclude specific packages from optimization
  },
});
