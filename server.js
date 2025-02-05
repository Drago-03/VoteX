const express = require('express');
const cors = require('cors');
const path = require('path');
const net = require('net');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend server is running!' });
});

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'dashboard', 'dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard', 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Function to check if a port is in use
const checkPort = (port) => {
    return new Promise((resolve, reject) => {
        const server = net.createServer()
            .once('error', err => {
                if (err.code === 'EADDRINUSE') {
                    resolve(false);
                } else {
                    reject(err);
                }
            })
            .once('listening', () => {
                server.close();
                resolve(true);
            })
            .listen(port);
    });
};

// Function to find available port
const findAvailablePort = async (startPort) => {
    let port = startPort;
    while (!(await checkPort(port))) {
        port++;
    }
    return port;
};

// Start server with port checking
const startServer = async () => {
    try {
        const PORT = await findAvailablePort(process.env.PORT || 5050);
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
            // Update the config file with new port if different from default
            if (PORT !== 5050) {
                console.log(`Note: Using alternate port ${PORT} because port 5050 was busy`);
            }
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Replace the existing app.listen with startServer()
startServer();

