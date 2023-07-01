// app.js
const express = require('express');
const UserController = require('./controllers/UserController');

const app = express();

app.use(express.json());

app.post('/login', UserController.login);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
