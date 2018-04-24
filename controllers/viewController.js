function showAll(req, res) {
  res.render('main/available', {
    appointments: res.locals.apps,
    dogs: res.locals.dogs,
    walkers: res.locals.data,
  });
}

function showOneApp(req, res) {
  res.render('main/one', {
    booked: res.locals.booked,
  });
}

// function createBookedApp(req, res) {
//   booked = res.locals.newbooking;
//   res.redirect(`create/new ${booked.id}`);
// }

function editBookedApp(req, res) {
  // booked = res.locals.booked;
  res.render('main/edit', {
    booked: res.locals.booked,
  });
}

function deleteApp(req, res) {
  res.redirect('main/main');
}

module.exports = {
  showAll,
  showOneApp,
  // createBookedApp,
  editBookedApp,
  deleteApp,
};


// function selectOneClient(req, res) {
//   res.render('show', {
//     client: res.locals.client,
//   });
// }
