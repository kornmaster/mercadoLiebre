// loginRoutes.js
const path = require ('node:path');
const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');

router.get('/login', loginController.renderLogin)

module.exports = router;