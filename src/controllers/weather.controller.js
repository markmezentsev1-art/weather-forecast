const weatherService = require('../services/weather.service');

exports.getWeather = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.render('index', {
      weather: null,
      error: 'City is required',
    });
  }

  const weather = await weatherService.getWeatherByCity(city);

  if (!weather) {
    return res.render('index', {
      weather: null,
      error: 'City not found',
    });
  }

  res.render('index', {
    weather,
    error: null,
  });
};

