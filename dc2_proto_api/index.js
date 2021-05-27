const express = require('express');
const app = express();

const USERS = [
  {
    id: 1,
    name: 'harada',
  },
  {
    id: 2,
    name: 'inukai',
  },
  {
    id: 3,
    name: 'kido',
  }
];

app.get('/users', (req, res, next) => {
  res.json(USERS);
});

app.get('/users/:userId', (req, res, next) => {
  res.json(USERS.find(user => user.id === parseInt(req.params.userId)));
});

module.exports = {
  app
};
