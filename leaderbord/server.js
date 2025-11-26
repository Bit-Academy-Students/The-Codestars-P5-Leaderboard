const express = require('express');
const cors = require('cors');
const path = require('path');

const metaRoutes = require('./routes/meta');
const scoresRoutes = require('./routes/scores');
const leaderboardRoutes = require('./routes/leaderboard');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', metaRoutes);
app.use('/api', scoresRoutes);
app.use('/api', leaderboardRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'leaderboard.html'));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
