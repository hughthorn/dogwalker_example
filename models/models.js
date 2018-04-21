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

// function getOneClient(id) {
//   const queryOne = db.one(`
//     SELECT *
//     FROM client
//     WHERE id = $1`, id);
//   return queryOne;
// }

// function createClient(client) {
//   const create = db.one(`
//     INSERT INTO client
//     (fname, lname, username, email, password, dog_name)
//     VALUES ($/fname/, $/lname/, $/username/, $/email/, $/password/, $/dog_name/)
//     RETURNING *`, client);
//   return create;
// }

// function updateClient(client) {
//   const query = db.one(`
//     UPDATE client
//     SET fname = $/fname/,
//     lname = $/lname/,
//     username = $/username/,
//     email = $/email/,
//     password = $/password/,
//     dog_name = $/dog_name/,
//     WHERE id = $/id/
//     RETURNING *`, client);
//   return query;
// }

// function deleteClient(id) {
//   const query = db.none(`
//     DELETE FROM client
//     WHERE id = $1`, id);
//   return query;
// }

module.exports = {
  getAllAppointments,
  getAllDogs,
  getAllWalkers,
  getAllBookedAppointments,
  createAppointment,
};
