const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/leaderboard/teams', (req, res) => {
  const { locationId } = req.query;

  const rows = db.prepare(`
    SELECT
      t.id AS team_id,
      t.name AS team_name,
      l.name AS location_name,
      IFNULL(SUM(s.points), 0) AS total_points
    FROM teams t
    JOIN locations l ON l.id = t.location_id
    LEFT JOIN scores s ON s.team_id = t.id
    ${locationId ? 'WHERE t.location_id = @locationId' : ''}
    GROUP BY t.id
    ORDER BY total_points DESC, team_name ASC
  `).all({ locationId });

  res.json(rows);
});

module.exports = router;
