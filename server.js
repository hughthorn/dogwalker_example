// Requiring all packages
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

// Establishing the port
const app = express();
const PORT = process.env.PORT || 3000;

// Connecting the server to the router
const router = require('./routes/dogsRoutes');

// Enabling EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Enabling morgan, bodyParser, and methodOverride
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

// Router established
app.use('/', router);

app.get('/', (req, res) => {
  res.render('available');
});

// Console log showing the port is up and running
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
