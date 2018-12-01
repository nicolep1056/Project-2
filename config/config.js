/* var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize

var sequelize = new Sequelize("grandmas_attic", "root", "123Repeater", {

  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
require("dotenv").config();
// Exports the connection for other files to use
module.exports = sequelize;
 */

module.exports = {
  development: {
    username: "root",
    password: "monday10",
    database: "grandmas_attic",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};
