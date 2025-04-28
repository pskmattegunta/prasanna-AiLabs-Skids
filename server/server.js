const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Serve static assets
const staticDir = process.env.NODE_ENV === 'production' ? '../dist' : '../public';
app.use(express.static(path.join(__dirname, staticDir)));

// Serve index.html for all non-API routes
app.get('*', (req, res) => {
  // Only serve index.html for non-API requests
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.resolve(__dirname, staticDir, 'index.html'));
  } else {
    res.status(404).json({ error: 'API route not found' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
