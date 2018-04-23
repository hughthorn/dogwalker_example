function showAll(req, res) {
  res.render('main/available', {
    appointments: res.locals.apps,
    dogs: res.locals.dogs,
    walkers: res.locals.data,
    booked: res.locals.booked,
  });
}

function showOneApp(req, res) {
  res.render('main/one', {
    booked: res.locals.booked,
  });
}

function showBookedAppointments(req, res) {
  res.render('main/main', {
    bookedApps: res.locals.bookedApps,
  });
}

function createBookedApp(req, res) {
  booked = res.locals.booked;
  res.redirect(`create/new ${booked.id}`);
}

function updateBookedApp(req, res) {
  res.locals.update = update;
  res.render('main/edit', {
    update: res.locals.update,
  });
}

function deleteApp(req, res) {
  res.redirect('main/main');
}

module.exports = {
  showAll,
  showOneApp,
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
