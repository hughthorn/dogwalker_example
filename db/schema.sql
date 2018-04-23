

DROP TABLE IF EXISTS available_appointments CASCADE;
DROP TABLE IF EXISTS dogs CASCADE;
DROP TABLE IF EXISTS walkers CASCADE;
DROP TABLE IF EXISTS booked_appointments CASCADE;

CREATE TABLE available_appointments (
  id SERIAL PRIMARY KEY,
  available_time TIMESTAMP
);

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE walkers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE booked_appointments (
  id SERIAL PRIMARY KEY,
  available_appointment_id INTEGER REFERENCES available_appointments(id),
  dog_id INTEGER REFERENCES dogs(id),
  walker_id INTEGER REFERENCES walkers(id)
);

INSERT INTO available_appointments
  (available_time)
VALUES
  ('2018-10-15 9:00:00'),
  ('2018-10-15 9:30:00'),
  ('2018-10-15 10:00:00'),
  ('2018-10-15 10:30:00'),
  ('2018-10-15 11:00:00'),
  ('2018-10-15 11:30:00'),
  ('2018-10-15 12:00:00'),
  ('2018-10-15 12:30:00'),
  ('2018-10-15 13:00:00'),
  ('2018-10-15 13:30:00'),
  ('2018-10-15 14:00:00'),
  ('2018-10-15 14:30:00'),
  ('2018-10-15 15:00:00'),
  ('2018-10-15 15:30:00'),
  ('2018-10-15 16:00:00'),
  ('2018-10-15 16:30:00');

INSERT INTO dogs
  (name)
VALUES
  ('Spots'),
  ('Fido'),
  ('Steve');

INSERT INTO walkers
  (name)
VALUES
  ('Jason'),
  ('Jimmy'),
  ('Sally');


