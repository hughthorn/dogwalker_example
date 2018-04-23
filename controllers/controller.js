const dogsDb = require('../models/models');

function showAllOpenApps(req, res, next) {
  console.log('Getting all open appointments');
  dogsDb.getAllAppointments()
    .then(data => {
      console.log('All open appointments');
      res.locals.data = data;
      next();
    })
    .catch(err=> {
      next(err);
    });
}

function showAllDogs(req, res, next) {
  console.log('Getting all dogs');
  dogsDb.getAllDogs()
    .then(data => {
      console.log('All dogs');
      res.locals.data = data;
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
      res.locals.allWalkers = data;
      next();
    })
    .catch(err=> {
      next(err);
    });
  }

function showAllBookedApps() {
  console.log('Getting all booked appointments');
  dogsDb.getAllBookedAppointments()
    .then(data => {
      res.locals.allBookedApps = data;
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
  showAllBookedApps,
  create,
  update,
  terminate,
};
