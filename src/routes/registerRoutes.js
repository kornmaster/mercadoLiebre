// homeRoutes.js
const path = require ('node:path');
const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController');

router.get('/register', registerController.renderRegister)

module.exports = router;