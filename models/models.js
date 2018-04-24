// Template for the models came from Peter Hoang's Harry Potter solution
const db = require('../config/connections');

// SELECT ALL FROM APPOINTMENTS TABLE
function getAllAppointments() {
  const queryAppointments = db.manyOrNone(`
    SELECT *
    FROM appointments
    LEFT JOIN dogs ON appointments.dog_id = dogs.id
    LEFT JOIN walkers ON appointments.walker_id = walkers.id
    `);
  return queryAppointments;
}

// GET ALL FROM DOGS TABLE
function getAllDogs() {
  const queryDogs = db.manyOrNone(`
    SELECT *
    FROM dogs
    ORDER BY id
    `);
  return queryDogs;
}

// GET ALL FROM WALKERS TABLE
function getAllWalkers() {
  const queryWalkers = db.manyOrNone(`
    SELECT *
    FROM walkers
    ORDER BY id
    `);
  return queryWalkers;
}

// FIND ONE APPOINTMENT FROM APPOINTMENTS TABLE
function findOneAppointment(id) {
  const queryBooked = db.one(`
    SELECT *
    FROM appointments
    WHERE id = $1`, [id]);
  return queryBooked;
}

// CREATE NEW APPOINTMENT (not implemented yet)

// function createAppointment(app) {
//   const create = db.one(`
//     INSERT INTO appointments
//     (dog_id)
//     VALUES ($/dog_id/)
//     REUTRNING *
//     `, app);
//   return create;
// }

// UPDATE APPOINTMENTS TABLE
function updateDog(dog) {
  const update = db.one(`
    UPDATE appointments
    SET dog_id = $/dog_id/
    WHERE id = $/id/
    RETURNING *`, dog);
  return update;
}

// DELETE APPOINTMENT FROM TABLE
function deleteAppointment(id) {
  const terminate = db.none(`
    DELETE FROM appointments
    WHERE id = $1`, id);
  return terminate;
}

// EXPORT ALL MODELS
module.exports = {
  getAllAppointments,
  findOneAppointment,
  getAllDogs,
  getAllWalkers,
  // createAppointment,
  updateDog,
  deleteAppointment,
};
