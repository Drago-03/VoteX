/**
 * Application Entry Point
 * This is the main entry file that bootstraps the React application.
 * It sets up the root component and applies global styles.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Create root element and render the application
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Enable React Strict Mode for additional development checks
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
