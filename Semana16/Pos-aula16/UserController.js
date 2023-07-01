// UserController.js
const UserModel = require('../models/UserModel');

const userModel = new UserModel();

const UserController = {
  login(req, res) {
    const { username, password } = req.body;

    const isAuthenticated = userModel.findByCredentials(username, password);

    res.json({ isAuthenticated });
  },
};

module.exports = UserController;