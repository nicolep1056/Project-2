module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Item;
};
