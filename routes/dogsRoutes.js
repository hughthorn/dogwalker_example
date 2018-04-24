// Controllers and express defined/required
const dogRouter = require('express').Router();
const controller = require('../controllers/controller');
const viewController = require('../controllers/viewController');

// From Peter's Harry Potter P solution, error route function
function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status:  'error',
    message: err.message,
  });
}

// Homepage route established
dogRouter.route('/')
  .get(
    controller.showAllOpenApps,
    controller.showAllDogs,
    controller.showAllWalkers,
    viewController.showAll, sendError,
  );

// Showing one, updating, and deleting appointment entry from table
dogRouter.route('/:id')
  .get(controller.showOne, viewController.showOneApp, sendError)
  .put(controller.update, viewController.editBookedApp, sendError)
  .delete(controller.terminate, sendError);

// Edit route
dogRouter.route('/:id/edit')
  .get(controller.showOne, viewController.editBookedApp);

module.exports = dogRouter;
