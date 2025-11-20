INSERT INTO users (name, email, role) VALUES
  ('Coach Thomas', 'coach@example.com', 'coach'),
  ('Admin Marieke', 'admin@example.com', 'admin');

INSERT INTO teams (name, location_id) VALUES
  ('PixelPioneers', 1),
  ('CodeCrushers', 1);

INSERT INTO students (name, team_id) VALUES
  ('Jason', 1),
  ('Alice', 1),
  ('Bob', 2);

INSERT INTO events (name, points_default, is_team_based, allow_negative) VALUES
  ('Prototype opleveren', 10, 1, 0),
  ('Goede samenwerking', 5, 1, 1),
  ('Te laat inleveren', -5, 1, 1);

INSERT INTO scores (coach_id, team_id, student_id, event_id, points) VALUES
  (1, 1, NULL, 1, 10),
  (1, 1, NULL, 2, 5),
  (1, 2, NULL, 1, 10);
