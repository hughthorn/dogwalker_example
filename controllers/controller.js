const dogsDb = require('../models/models');

function showAllOpenApps(req, res, next) {
  console.log('Getting all open appointments');
  dogsDb.getAllAppointments()
    .then(apps => {
      console.log('All open appointments');
      res.locals.apps = apps;
      next();
    })
    .catch(err=> {
      next(err);
    });
}

function showAllDogs(req, res, next) {
  console.log('Getting all dogs');
  dogsDb.getAllDogs()
    .then(dogs => {
      console.log('All dogs');
      res.locals.dogs = dogs;
      next();
    })
    .catch(err=> {
      next(err);
    });
}

function showAllWalkers(req, res, next) {
  console.log('Getting all walkers');
  dogsDb.getAllWalkers()
    .then(data => {
      console.log('All walkers');
      res.locals.data = data;
      next();
    })
    .catch(err=> {
      next(err);
    });
  }

// function showAllBookedApps(req, res, next) {
//   console.log('Getting all booked appointments');
//   dogsDb.getAllBookedAppointments()
//     .then(booked => {
//       res.locals.booked = booked;
//       next();
//     })
//     .catch(err => {
//       next(err);
//     });
// }

function showOne(req, res, next) {
  console.log('Showing one appointment');
  dogsDb.findOneAppointment(req.params.id)
    .then(data => {
      res.locals.booked = booked;
      next();
    })
    .catch(err => {
      next(err);
    });
}

function create(req, res, next) {
  dogsDb.createAppointment(req.body)
    .then(data => {
      res.locals.newAppointment = data;
      next();
    })
    .catch(err => {
      next(err);
    });
}

function update(req, res, next) {
    req.body.id = req.params.id;
  dogsDb.updateDog(req.body)
    .then(data => {
      res.redirect(`/bookedAppointments/${req.body.id}`)
    })
    .catch(err=> {
      err:err
    });
}

function terminate(req, res) {
  studentsDb.deleteDog(req.params.id)
    .then(() => {
      res.redirect('/bookedAppointments');
    })
    .catch(err => {
      res.status(500).json({
        message:err.message
      })
    });
}

module.exports = {
  showAllOpenApps,
  showAllDogs,
  showAllWalkers,
  showOne,
  create,
  update,
  terminate,
};
