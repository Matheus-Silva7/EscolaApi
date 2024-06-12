const Sequilize = require("sequelize");

const sequilize = new Sequilize("escolaApi", "root", "root", {
  dialect: "mysql",
  host: "localhost"
});

module.exports = sequilize;