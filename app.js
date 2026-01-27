require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 3000;

const weatherRoutes = require('./routes/weather.routes');

app.set('view engine', 'ejs');

app.use('/', weatherRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
