// Template for this model came from Peter Hoang
const db = require('../config/connections');

function getAllClients() {
  const queryAll = db.manyOrNone(`
    SELECT *
    FROM client
    ORDER BY id
    `);
  return queryAll;
}

function getOneClient(id) {
  const queryOne = db.one(`
    SELECT *
    FROM client
    WHERE id = $1`, id);
  return queryOne;
}

function createClient(client) {
  const create = db.one(`
    INSERT INTO client
    (fname, lname, username, email, password, dog_name)
    VALUES ($/fname/, $/lname/, $/username/, $/email/, $/password/, $/dog_name/)
    RETURNING *`, client);
  return create;
}

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
  getAllClients,
  getOneClient,
  createClient,
  // updateClient,
  // deleteClient,
};
