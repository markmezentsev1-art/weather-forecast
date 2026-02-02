const { createClient } = require('redis');
const { env } = require('../config/env');

const redisClient = createClient({
  url: env.REDIS_URL,
});

redisClient.on('error', (err) => {
  console.error('❌ Redis Client Error', err);
});

const connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log('✅ Redis connected');
  }
};

module.exports = {
  redisClient,
  connectRedis,
};
