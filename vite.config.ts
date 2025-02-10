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
      // Include JSX/TSX files
      include: "**/*.{jsx,tsx}",
      // Enable Fast Refresh
      fastRefresh: true,
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
    port: 5173, // Default Vite port
    strictPort: true, // Ensure exact port is used
    open: true, // Open browser on server start
    host: true, // Listen on all local IPs
    cors: true, // Enable CORS
    hmr: {
      overlay: true, // Show errors as overlay
    },
  },

  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
    exclude: ["lucide-react"],
  },
});
