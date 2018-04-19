const clientDb = require('../models/dogs');

function getAll(req, res, next) {
  console.log('Getting all clients');
  clientDb.getAllClients()
    .then(data => {
      // console.log('Queried db and got' + data.length + 'results');
      res.locals.dogs = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

module.exports = {
  getAll,
};
