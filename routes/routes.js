const Controller = require('../controller/controller');

module.exports = app => {
  app.get('/api', (req, res) => {
    res.send({ hello: 'world' });
  });

  app.post('/todo', (req, res) => {
    // todo
  });
};
