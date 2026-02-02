const express = require('express');

const {
  renderHome,
  getWeather,
} = require('../controllers/weather.controller');


const router = express.Router();

router.get('/', renderHome);
router.get('/weather', getWeather);


module.exports = router;
