const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const PORT = process.env.PORT || 7000;

mongoose.connect('mongodb://localhost/proj1');

const app = express();
routes(app);

app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

module.exports = app;
