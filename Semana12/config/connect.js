const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "../data/clinica-unisoft.db",
});

module.exports = sequelize;