const dogRouter = require('express').Router();
const controller = require('../controllers/controller');
const viewController = require('../controllers/viewController');

// From Peter's HP solution
function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status:  'error',
    message: err.message,
  });
}

dogRouter.route('/')
  .get(controller.getAllApps, viewController.showAppointments, sendError);
// .post(clientController.create, viewController.selectOneClient);

// clientRouter.route('/:id')
//   .get(clientController.getOne, viewController.selectOneClient);
// clientRouter.route('/')
// .get(clientController.getAll, sendError);

module.exports = dogRouter;
