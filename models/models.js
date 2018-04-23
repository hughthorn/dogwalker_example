// Template for this model came from Peter Hoang
const db = require('../config/connections');

// SELECT ALL
function getAllAppointments() {
  const queryAvailible = db.manyOrNone(`
    SELECT *
    FROM available_appointments
    ORDER BY id
    `);
  return queryAvailible;
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

function getAllBookedAppointments() {
  const queryBooked = db.manyOrNone(`
    SELECT *
    FROM booked_appointments
    ORDER BY id
    `);
  return queryBooked;
}

// CREATE

function createAppointment(app) {
  const create = db.one(`
    INSERT INTO booked_appointments
    (available_appointment_time, dog_id, walker_id)
    VALUES ($/available_appointment_time/, $/dog_id/, $/walker_id/)
    REUTRNING *
    `, app);
  return create;
}

// UPDATE
function updateDog(dog) {
  const update = db.one(`
    UPDATE booked_appointments
    SET available_appointments = $/available_appointments/
    dog_id = $/dog_id/
    walker_id = $/walker_id/
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
  getAllDogs,
  getAllWalkers,
  getAllBookedAppointments,
  createAppointment,
  updateDog,
  deleteAppointment,
};
