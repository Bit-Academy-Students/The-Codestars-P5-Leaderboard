// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

// Import routes
const authRoutes = require('./routes/auth');
const teamsRoutes = require('./routes/teams');
const eventsRoutes = require('./routes/events');
const scoresRoutes = require('./routes/scores');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files from /public
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', authRoutes);
app.use('/api', teamsRoutes);
app.use('/api', eventsRoutes);
app.use('/api', scoresRoutes);
app.use('/api', leaderboardRoutes);

// Default route (when going to / in browser)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
