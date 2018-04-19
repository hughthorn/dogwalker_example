const db = require('../config/connections');

function getAllClients() {
  const queryAll = db.manyOrNone(`
    SELECT *
    FROM clients
    `);
  return queryAll;
}

module.exports = {
  getAllClients,
};
