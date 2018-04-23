function showAll(req, res) {
  res.render('main/available', {
    appointments: res.locals.apps,
    dogs: res.locals.dogs,
    walkers: res.locals.data,
    booked: res.locals.booked,
  });
}

// function showDogs(req, res) {
//   res.render('main/dogs', {
//     dogs: res.locals.data,
//   });
// }

// function showWalkers(req, res) {
//   res.render('main/main', {
//     walkers: res.locals.walkers,
//   });
// }

function showBookedAppointments(req, res) {
  res.render('main/main', {
    bookedApps: res.locals.bookedApps,
  });
}

function createBookedApp(req, res) {
  bookedApps = res.locals.newApp;
  res.redirect(`main/new ${bookedApps.id}`);
}

function updateBookedApp(req, res) {
  update = res.locals.update;
  res.render('main/edit', {
    update: res.locals.update,
  });
}

function deleteApp(req, res) {
  res.redirect('main/main');
}

module.exports = {
  showAll,
  // showDogs,
  // showWalkers,
  showBookedAppointments,
  createBookedApp,
  updateBookedApp,
  deleteApp,
};


// function selectOneClient(req, res) {
//   res.render('show', {
//     client: res.locals.client,
//   });
// }
