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
  .get(
    controller.showAllOpenApps,
    controller.showAllDogs,
    controller.showAllWalkers,
    viewController.showAll, sendError,
  );

// dogRouter.route('/dogs')
//   .get(controller.showAllDogs, viewController.showDogs, sendError);
  // .get(controller.showAllWalkers, viewController.showWalkers, sendError);
// .get(controller.showAllBookedApps, viewController.showBookedAppointments, sendError);
// .post(controller.create, viewController.selectOneClient);

// dogRouter.route('/new')
//   .get(controller.)
// clientRouter.route('/:id')
//   .get(clientController.getOne, viewController.selectOneClient);
// clientRouter.route('/')
// .get(clientController.getAll, sendError);

module.exports = dogRouter;
