const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();

// Basic middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simplified logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// API routes
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend server is running!" });
});

// Static file serving
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// SPA fallback
app.get("*", (req, res) => {
  if (req.url.startsWith("/api")) return next();
  res.sendFile(path.join(distPath, "index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const server = app
  .listen(PORT, HOST, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Also try http://${HOST}:${PORT}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is busy. Try a different port:`);
      console.error(`PORT=3001 npm run dev`);
    } else {
      console.error("Server error:", err);
    }
    process.exit(1);
  });
