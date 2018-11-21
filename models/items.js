var Sequelize = require("sequelize");
// sequelize references our connection to the DB.
var sequelize = require("../config/config.js");

// Creates an "Item" model that matches up with DB
var Item = sequelize.define(
  "item",
  {
    // the routeName gets saved as a string
    routeName: Sequelize.STRING,
    item: Sequelize.STRING,
    area: Sequelize.STRING,
    description: Sequelize.STRING,
    pickup: Sequelize.STRING
  },
  
  {
    timestamps: false,
    freezeTableName: true
  }
);

// Syncs with DB
Item.sync();

// Makes the Iatem Model available for other files (will also create a table)
module.exports = Item;
