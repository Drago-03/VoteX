const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// API routes
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend server is running!' });
});

// Check if we're in development mode
const isDevelopment = process.env.NODE_ENV === 'development';
const dashboardPath = path.join(__dirname, 'dashboard');
const distPath = path.join(dashboardPath, 'dist');

// Check build status before serving files
const checkBuildStatus = () => {
    if (!fs.existsSync(distPath)) {
        console.error('Error: dist folder not found.');
        console.error('Please run the following commands:');
        console.error('1. npm run clean');
        console.error('2. npm install');
        console.error('3. npm run build');
        process.exit(1);
    }
};

// Serve static files based on environment
if (isDevelopment) {
    console.log('Running in development mode - serving from Vite dev server');
} else {
    checkBuildStatus();
    app.use(express.static(distPath));
}

// Handle React routing
app.get('*', (req, res, next) => {
    if (req.url.startsWith('/api')) {
        return next();
    }

    if (isDevelopment) {
        res.redirect('http://localhost:5173' + req.url);
    } else {
        const indexPath = path.join(distPath, 'index.html');
        if (!fs.existsSync(indexPath)) {
            return res.status(500).send('Build files not found. Please run npm run build first.');
        }
        res.sendFile(indexPath);
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Mode: ${isDevelopment ? 'development' : 'production'}`);
});

