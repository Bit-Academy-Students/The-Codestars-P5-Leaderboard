const express = require('express');
const db = require('../db');
const router = express.Router();

router.post('/scores', (req, res) => {
  const { coachId, teamId, studentId, eventId, points } = req.body;

  if (!coachId || (!teamId && !studentId) || !eventId || typeof points !== 'number') {
    return res.status(400).json({ error: 'coachId, eventId, points en teamId OF studentId zijn verplicht.' });
  }

  const stmt = db.prepare(`
    INSERT INTO scores (coach_id, team_id, student_id, event_id, points)
    VALUES (?, ?, ?, ?, ?)
  `);

  const info = stmt.run(coachId, teamId || null, studentId || null, eventId, points);

  res.json({ id: info.lastInsertRowid });
});

module.exports = router;
