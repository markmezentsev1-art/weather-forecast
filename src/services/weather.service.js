const { env } = require('../config/env');

exports.getWeatherByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city,
  )}&units=metric&appid=${env.WEATHER_API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) return null;

    const data = await response.json();

    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
    };
  } catch (error) {
    console.error('Weather fetch error:', error);
    return null;
  }
};
