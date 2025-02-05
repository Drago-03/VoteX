const express = require('express');
const path = require('path');
// ...existing code...

// Serve static files from the dashboard folder
app.use(express.static('dashboard'));

// Add route for dashboard
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard', 'index.html'));
});

// ...existing code...
