exports.renderHome = (req, res) => {
  res.render('index', {
    weather: null,
    error: null,
  });
};

exports.getWeather = (req, res) => {
  const city = req.query.city?.trim();

  let error = null;
  let weather = null;

  // server-side validation
  if (!city) {
    error = 'City is required';
  } else if (city.length < 2) {
    error = 'City name must be at least 2 characters';
  } else if (!/^[a-zA-Z\s-]+$/.test(city)) {
    error = 'City name can contain only letters';
  }

  // mock data (API позже)
  if (!error) {
    weather = {
      city,
      temp: 22,
    };
  }

  res.render('index', { weather, error });
};
