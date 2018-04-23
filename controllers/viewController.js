function showOpenAppointments(req, res) {
  res.render('main/main', {
    appointments: res.locals.appointments,
  });
}

function showDogs(req, res) {
  res.render('main/main', {
    dogs: res.locals.dogs,
  });
}

function showWalkers(req, res) {
  res.render('main/main', {
    walkers: res.locals.walkers,
  });
}

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
  showOpenAppointments,
  showDogs,
  showWalkers,
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
