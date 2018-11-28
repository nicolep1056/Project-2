var Sequelize = require("sequelize");
// sequelize references our connection to the DB.
var sequelize = require("../config/config.js");

// Creates an "Item" model that matches up with DB
var Item = sequelize.define(
  "item",
  {
    // the routeName gets saved as a string
    routeName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    item: {
      type:Sequelize.STRING,
      allowNull: false
    },
    area: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    pickup: {
      type: Sequelize.STRING,
      allowNull: false
    },
    availableUntil: {
/*       field: availableUntil, */
      type: Sequelize.DATEONLY
    }
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
