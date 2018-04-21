const dogsDb = require('../models/models');

function getAllApps(req, res, next) {
  console.log('Getting all clients');
  dogsDb.getAllAppointments()
    .then(data => {
      console.log('All appointments');
      res.json(data);
      res.locals.allAppointments = data;
      next();
    })
    .catch(err=> {
      next(err);
    });
}

// function getOne(req, res, next) {
//   dogsDb.getOneClient(req.params.id)
//     .then(data => {
//       res.json(data);
//       // res.locals.client = data;
//       // next();
//     })
//     .catch(err => {
//       next(err);
//     });
// }

// function create(req, res, next) {
//   dogsDb.createClient(req.body)
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
//   dogsDb.updateClient(req.body)
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
  getAllApps,
  // getOne,
  // create,
  // update,
  // terminate,
};
