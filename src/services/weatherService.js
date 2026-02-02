const { redisClient } = require('../redis/client');
const { env } = require('../config/env');
const {
  WEATHER_CACHE_TTL,
  OPEN_WEATHER_BASE_URL,
} = require('../config/consts');
// TODO: move to config file consts.js

const getWeatherByCity = async (city) => {
  const cacheKey = `weather:${city.toLowerCase()}`;

  // Проверяем Redis
  const cached = await redisClient.get(cacheKey);

  if (cached) return JSON.parse(cached);

  // Если нет в кэше — идем к API
  // TODO: https://api.openweathermap.org move to consts.js
  const res = await fetch(
    `${OPEN_WEATHER_BASE_URL}/data/2.5/weather?q=${city}&units=metric&appid=${env.WEATHER_API_KEY}`
  );

  const data = await res.json();

  // Сохраняем в Redis на CACHE_TTL секунд
  await redisClient.setEx(cacheKey, WEATHER_CACHE_TTL, JSON.stringify(data));

  return data;
};

module.exports = { getWeatherByCity };
