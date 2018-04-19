function homePage(req, res) {
  console.log('homepage');
  res.render('homepage', {
    clients: res.locals.clients,
  });
}

module.exports = {
  homePage,
};

//   showLoginForm(req, res) {
//     console.log('Login page');
//     res.render('auth/login');
//   },
// };
