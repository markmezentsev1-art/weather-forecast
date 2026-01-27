const express = require('express');
const router = express.Router();

console.log('✅ weather.routes.js loaded');

const weatherController = require('../controllers/weather.controller');

router.get('/', weatherController.getWeather);
router.get('/weather', weatherController.getWeather);

module.exports = router;
