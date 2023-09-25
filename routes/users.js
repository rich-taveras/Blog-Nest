const express = require('express');
const usersController = require('../controllers/usersController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

// Define routes for user-related actions
router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.post('/logout', usersController.logout);

// Define a protected route (dashboard)
router.get('/dashboard', authenticate, (req, res) => {
    // Render the dashboard page
  });

module.exports = router;
