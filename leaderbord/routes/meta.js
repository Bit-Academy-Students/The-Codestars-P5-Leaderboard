const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/teams', (req, res) => {
  const rows = db.prepare(`
    SELECT t.id, t.name, l.name AS location_name
    FROM teams t
    JOIN locations l ON l.id = t.location_id
    ORDER BY l.name, t.name
  `).all();

  res.json(rows);
});

router.get('/students', (req, res) => {
  const rows = db.prepare(`
    SELECT s.id, s.name, t.name AS team_name
    FROM students s
    JOIN teams t ON t.id = s.team_id
    ORDER BY t.name, s.name
  `).all();

  res.json(rows);
});

module.exports = router;
