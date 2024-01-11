const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("api", "root", "joalmoso0304", {
  host: "localhost",
  dialect: "mysql",
});


module.exports = sequelize;

