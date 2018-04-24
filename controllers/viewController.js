// View controller function to display all tables
function showAll(req, res) {
  res.render('main/available', {
    appointments: res.locals.apps,
    dogs:         res.locals.dogs,
    walkers:      res.locals.data,
  });
}

// View controller to display one appointment from the table
function showOneApp(req, res) {
  res.render('main/one', {
    booked: res.locals.booked,
  });
}

// Edit/Create/Update view controller
function editBookedApp(req, res) {
  res.render('main/edit', {
    booked: res.locals.booked,
  });
}

// Redirects to the homepage once deleted
function deleteApp(req, res) {
  res.redirect('main/main');
}

// Export all functions
module.exports = {
  showAll,
  showOneApp,
  // createBookedApp,
  editBookedApp,
  deleteApp,
};

// function createBookedApp(req, res) {
//   booked = res.locals.newbooking;
//   res.redirect(`create/new ${booked.id}`);
// }
