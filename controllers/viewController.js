function showAppointments(req, res) {
  console.log('Showing all appointments');
  res.render('appointments/appointments', {
    appointments: res.locals.appointments,
  });
}

module.exports = {
  showAppointments,
};

// function selectOneClient(req, res) {
//   res.render('show', {
//     client: res.locals.client,
//   });
// }

// function createClient(req, res) {
//   client = res.locals.newClient;
//   res.redirect(`create/ ${client.id}`);
// }
// function showAllStudents(req, res) {
//   res.render('')
// }


// module.exports = {
//   homePage,
//   selectOneClient,
//   createClient,
// };

//   showLoginForm(req, res) {
//     console.log('Login page');
//     res.render('auth/login');
//   },
// };
