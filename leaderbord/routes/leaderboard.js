const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/leaderboard/teams', (req, res) => {
  const rows = db.prepare(`
    SELECT 
      t.id AS team_id,
      t.name AS team_name,
      l.name AS location_name,
      IFNULL(SUM(s.points), 0) AS total_points
    FROM teams t
    JOIN locations l ON l.id = t.location_id
    LEFT JOIN scores s ON s.team_id = t.id
    GROUP BY t.id
    ORDER BY total_points DESC, team_name ASC
  `).all();

  res.json(rows);
});

router.get('/leaderboard/students', (req, res) => {
  const rows = db.prepare(`
    SELECT 
      s.id AS student_id,
      s.name AS student_name,
      t.name AS team_name,
      IFNULL(SUM(sco.points), 0) AS total_points
    FROM students s
    JOIN teams t ON t.id = s.team_id
    LEFT JOIN scores sco ON sco.student_id = s.id
    GROUP BY s.id
    ORDER BY total_points DESC, student_name ASC
  `).all();

  res.json(rows);
});

module.exports = router;
