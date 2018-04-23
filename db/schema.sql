\c dog_walker_crud_test

DROP TABLE IF EXISTS appointments CASCADE;
DROP TABLE IF EXISTS dogs CASCADE;
DROP TABLE IF EXISTS walkers CASCADE;

CREATE TABLE dogs (
  id SERIAL PRIMARY KEY,
  dname VARCHAR(255)
);

CREATE TABLE walkers (
  id SERIAL PRIMARY KEY,
  wname VARCHAR(255)
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
  available_time TIMESTAMP,
  dog_id INTEGER REFERENCES dogs(id),
  walker_id INTEGER REFERENCES walkers(id)
);

INSERT INTO dogs
  (dname)
VALUES
  ('Spots'),
  ('Fido'),
  ('Steve');

INSERT INTO walkers
  (wname)
VALUES
  ('Jason');

INSERT INTO appointments
  (available_time, dog_id, walker_id)
VALUES
  ('2018-10-15 9:00:00', null, 1),
  ('2018-10-15 9:30:00', null, 1),
  ('2018-10-15 10:00:00', null, 1),
  ('2018-10-15 10:30:00', null, 1),
  ('2018-10-15 11:00:00', null, 1),
  ('2018-10-15 11:30:00', null, 1),
  ('2018-10-15 12:00:00', null, 1),
  ('2018-10-15 12:30:00', null, 1),
  ('2018-10-15 13:00:00', null, 1),
  ('2018-10-15 13:30:00', null, 1),
  ('2018-10-15 14:00:00', null, 1),
  ('2018-10-15 14:30:00', null, 1),
  ('2018-10-15 15:00:00', null, 1),
  ('2018-10-15 15:30:00', null, 1),
  ('2018-10-15 16:00:00', null, 1),
  ('2018-10-15 16:30:00', null, 1);





