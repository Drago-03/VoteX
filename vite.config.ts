/**
 * Vite Configuration
 * Sets up the development server and build process for the application.
 * Configures plugins, server options, and build optimizations.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Include refresh plugin for development
      include: "**/*.{jsx,tsx}",
    }),
  ],

  resolve: {
    alias: {
      // Add path aliases for easier imports
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Build output configuration
  build: {
    outDir: "dist",
    sourcemap: true,
    // Optimize dependencies
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },

  // Development server settings
  server: {
    port: 3000,
    open: true, // Open browser on server start
    host: true, // Listen on all local IPs
    // Add CORS headers
    cors: true,
  },

  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["lucide-react"],
  },
});
