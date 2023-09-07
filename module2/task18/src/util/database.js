const Sequelize = require("sequelize");

// SCHEMAS Name = node-complete , User Name = root , Password = Geeta@24
const sequelize = new Sequelize("node-complete", "root", "Geeta@24", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;