// Template for this model came from Peter Hoang
const db = require('../config/connections');

// SELECT ALL
function getAllAppointments() {
  const queryAppointments = db.manyOrNone(`
    SELECT *
    FROM appointments
    LEFT JOIN dogs ON appointments.dog_id = dogs.id
    LEFT JOIN walkers ON appointments.walker_id = walkers.id
    `);
  return queryAppointments;
}

function findOneAppointment(id) {
  const queryBooked = db.one(`
    SELECT *
    FROM appointments
    WHERE id = $1`, id);
  return queryBooked;
}

function getAllDogs() {
  const queryDogs = db.manyOrNone(`
    SELECT *
    FROM dogs
    ORDER BY id
    `);
  return queryDogs;
}

function getAllWalkers() {
  const queryWalkers = db.manyOrNone(`
    SELECT *
    FROM walkers
    ORDER BY id
    `);
  return queryWalkers;
}

// CREATE

function createAppointment(app) {
  const create = db.one(`
    INSERT INTO appointments
    (dog_id)
    VALUES ($/dog_id/)
    REUTRNING *
    `, app);
  return create;
}

// UPDATE
function updateDog(dog) {
  const update = db.one(`
    UPDATE booked_appointments
    SET dog_id = $/dog_id/
    RETURNING *`, dog);
  return update;
}

// DELETE

function deleteAppointment(id) {
  const terminate = db.none(`
    DELETE FROM booked_appointments
    WHERE id = $1`, id);
  return terminate;
}

module.exports = {
  getAllAppointments,
  findOneAppointment,
  getAllDogs,
  getAllWalkers,
  createAppointment,
  updateDog,
  deleteAppointment,
};
