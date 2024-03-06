// homeRoutes.js
const path = require ('node:path');
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.renderHome);
router.get('/register', homeController.renderRegister)
router.get('/login', homeController.renderLogin)

module.exports = router;