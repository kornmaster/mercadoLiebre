// homeRoutes.js
const path = require ('node:path');
const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.renderHome)

module.exports = router;