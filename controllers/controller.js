// Template for the controllers came from Peter Hoang's Harry Potter solution
const dogsDb = require('../models/models');

// Show Appointment Table on homepage
function showAllOpenApps(req, res, next) {
  console.log('Getting all open appointments');
  dogsDb.getAllAppointments()
    .then((apps) => {
      console.log('All open appointments');
      res.locals.apps = apps;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

// Show one appointment on page
function showOne(req, res, next) {
  console.log('Showing one appointment');
  dogsDb.findOneAppointment(req.params.id)
    .then((booked) => {
      res.locals.booked = booked;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

// Show Dogs Table on homepage
function showAllDogs(req, res, next) {
  console.log('Getting all dogs');
  dogsDb.getAllDogs()
    .then((dogs) => {
      console.log('All dogs');
      res.locals.dogs = dogs;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

// Show Walkers Table on homepage
function showAllWalkers(req, res, next) {
  console.log('Getting all walkers');
  dogsDb.getAllWalkers()
    .then((data) => {
      console.log('All walkers');
      res.locals.data = data;
      next();
    })
    .catch((err) => {
      next(err);
    });
}

// Create controller function (not implemented)
// function create(req, res, next) {
//   dogsDb.createAppointment(req.body.id)
//     .then(data => {
//       res.locals.newAppointment = data;
//       next();
//     })
//     .catch(err => {
//       next(err);
//     });
// }

// Update Appointment function
function update(req, res, next) {
  req.body.id = req.params.id;
  dogsDb.updateDog(req.body)
    .then((data) => {
      res.redirect(`/${req.body.id}`);
      next();
    })
    .catch((err) => {
      err;
    });
}

// Delete Appointment function
function terminate(req, res) {
  dogsDb.deleteAppointment(req.params.id)
    .then(() => {
      res.redirect('/');
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
}

module.exports = {
  showAllOpenApps,
  showAllDogs,
  showAllWalkers,
  showOne,
  // create,
  update,
  terminate,
};
