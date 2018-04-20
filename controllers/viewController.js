function homePage(req, res) {
  console.log('homepage');
  res.render('homepage', {
    clients: res.locals.clients,
  });
}

function selectOneClient(req, res) {
  res.render('views/homepage', {
    client: res.locals.clients,
  });
}

// function showAllStudents(req, res) {
//   res.render('')
// }

module.exports = {
  homePage,
  selectOneClient,
};

//   showLoginForm(req, res) {
//     console.log('Login page');
//     res.render('auth/login');
//   },
// };
