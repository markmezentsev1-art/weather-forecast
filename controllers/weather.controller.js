const { getWeatherByCity } = require('../services/weather.service');

exports.renderHome = (req, res) => {
  res.render('index', { weather: null, error: null });
};

exports.getWeather = async (req, res) => {
  const city = req.query.city?.trim();

  let weather = null;
  let error = null;

  if (!city) {
    error = 'City is required';
  } else if (city.length < 2) {
    error = 'City name must be at least 2 characters';
  } else {
    weather = await getWeatherByCity(city);

    if (!weather) {
      error = 'Weather service unavailable or city not found';
    }
  }

  res.render('index', { weather, error });
};
