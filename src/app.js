require('dotenv').config();

const express = require('express');
const { connectRedis } = require('./redis/client');
const weatherRoutes = require('./routes/weather.routes');
const { env } = require('./config/env'); // 👈 ВАЖНО

// TODO: translate russin comments to english
const app = express();
const PORT = Number(env.PORT); // 👈 берем из конфига

app.set('view engine', 'ejs');
app.use('/', weatherRoutes);

(async () => {
  try {
    await connectRedis();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);

    process.exit(1);
  }
})();
