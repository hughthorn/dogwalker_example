const clientsDb = require('../models/clients');

function getAll(req, res, next) {
  console.log('Getting all clients');
  clientsDb.getAllClients()
    .then(data => {
      // console.log('Queried db and got' + data.length + 'results');
      console.log('this is data:', data);
      res.json(data);
      // res.locals.clients = data;
      // next();
    })
    .catch(err=> {
      next(err);
    });
}

function getOne(req, res, next) {
  clientsDb.getOneClient(req.params.id)
    .then(data => {
      res.locals.client = data;
      next();
    })
    .catch(err => {
      next(err);
    });
}

// function create(req, res, next) {
//   clientsDb.createClient(req.body)
//     .then(data => {
//       res.locals.newClient = data;
//       next();
//     })
//     .catch(err => {
//       next(err);
//     });
// }

// function update(req, res, next) {
//     req.body.id = req.params.id;
//   clientsDb.updateClient(req.body)
//     .then(data => {
//       res.redirect(`/clients/${req.body.id}`)
//     })
//     .catch(err=> {
//       err:err
//     });
// }

// function terminate(req, res) {
//   studentsDb.deleteClient(req.params.id)
//     .then(() => {
//       res.redirect('/clients');
//     })
//     .catch(err => {
//       res.status(500).json({
//         message:err.message
//       })
//     });
// }

module.exports = {
  getAll,
  getOne,
  // create,
  // update,
  // terminate,
};
