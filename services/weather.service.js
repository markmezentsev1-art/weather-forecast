const axios = require('axios');

exports.getWeatherByCity = async (city) => {
  const apiKey = process.env.WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await axios.get(url);

    return {
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
    };
  } catch (error) {
    return null; // ✅ КЛЮЧЕВОЕ ИЗМЕНЕНИЕ
  }
};
