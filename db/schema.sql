\c dog_walker_crud

DROP TABLE IF EXISTS client CASCADE;
-- DROP TABLE IF EXISTS walker
-- DROP TABLE IF EXISTS appointments

CREATE TABLE client (
  id SERIAL PRIMARY KEY,
  fname TEXT,
  lname TEXT,
  dog_name TEXT
);
-- CREATE TABLE walker (id SERIAL PRIMARY KEY,)
-- CREATE TABLE appointments (id SERIAL PRIMARY KEY,)

INSERT INTO client
  (fname, lname, dog_name)
VALUES
  ('Keith', 'Dude', 'Spots');
