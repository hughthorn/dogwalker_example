\c dog_walker_crud_test

DROP TABLE IF EXISTS client CASCADE;
-- DROP TABLE IF EXISTS walker
-- DROP TABLE IF EXISTS appointments

CREATE TABLE client (
  id SERIAL PRIMARY KEY,
  fname VARCHAR(255),
  lname VARCHAR(255),
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  dog_name VARCHAR(255) NOT NULL
);

-- CREATE TABLE walker (id SERIAL PRIMARY KEY,)
-- CREATE TABLE appointments (id SERIAL PRIMARY KEY,)

INSERT INTO client
  (fname, lname, username, email, password, dog_name)
VALUES
  ('Keith', 'Dude', 'yourMan303', 'yourMan303@gmail.com', 'tysldk454', 'Spots'),
  ('Larry', 'Dude', 'lalala', 'hellolight@gmail.com', 'crap', 'lowP');
