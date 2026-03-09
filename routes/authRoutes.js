const express = require('express');
const { registerController, loginController } = require('../controllers/authControllers');

const router = express.Router();


//routes

// register route
router.post('/register', registerController)
router.post('/login', loginController)

module.exports = router