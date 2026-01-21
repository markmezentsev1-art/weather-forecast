const express = require('express');
const router = express.Router();

const {
  renderHome,
  getWeather,
} = require('../controllers/weather.controller');

router.get('/', renderHome);
router.get('/weather', getWeather);

module.exports = router;
