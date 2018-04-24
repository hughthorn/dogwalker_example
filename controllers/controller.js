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

function showOne(req, res, next) {
  console.log('Showing one appointment');
  dogsDb.findOneAppointment(req.params.id)
    .then(booked => {
      res.locals.booked = booked;
      next();
    })
    .catch(err => {
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

function create(req, res, next) {
  dogsDb.createAppointment(req.body.id)
    .then(data => {
      res.locals.newAppointment = data;
      next();
    })
    .catch(err => {
      next(err);
    });
}

function update(req, res, next) {
  // req.body.id = req.params.id;
  dogsDb.updateDog(req.params.id)
    .then(data => {
      res.redirect(`/new/${req.params.id}`)
      next();
    })
    .catch(err=> {
      err:err
    });
}

function terminate(req, res) {
  dogsDb.deleteAppointment(req.params.id)
    .then(() => {
      res.redirect('/');
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
