PRAGMA foreign_keys = ON;

-- Users 
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('coach', 'admin'))
);
  


-- Teams 
CREATE TABLE IF NOT EXISTS teams (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  location_id INTEGER NOT NULL,
  FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE
);

-- Students 
CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team_id INTEGER NOT NULL,
  FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE CASCADE
);

-- Events
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  points_default INTEGER NOT NULL,
  is_team_based INTEGER NOT NULL DEFAULT 1, 
  allow_negative INTEGER NOT NULL DEFAULT 1
);

-- Scores 
CREATE TABLE IF NOT EXISTS scores (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  coach_id INTEGER NOT NULL,
  team_id INTEGER,
  student_id INTEGER,
  event_id INTEGER NOT NULL,
  points INTEGER NOT NULL,
  created_at DATETIME NOT NULL DEFAULT (datetime('now')),

  FOREIGN KEY (coach_id) REFERENCES users(id),
  FOREIGN KEY (team_id) REFERENCES teams(id),
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (event_id) REFERENCES events(id)
);
