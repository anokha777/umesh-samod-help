const express = require('express');

const helpRouter = express.Router();
const helpController = require('../controllers/helpController');

helpRouter.route('/signin')
  .post(helpController.signin);

// helpRouter.route('/otp/:mobileno')
//   .get(helpController.otp);

module.exports = helpRouter;