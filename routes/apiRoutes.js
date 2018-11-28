var Item = require("../models/items.js");

module.exports = function (app) {
  // Get all items
  app.get("/api/items", function (req, res) {
    db.Item.findAll({}).then(function (dbItems) {
      res.json(dbItems);
    });
  });

  // Create a new item
  app.post("/api/items", function (req, res) {
    db.Item.create(req.body).then(function (dbItem) {
      res.json(dbItem);
    });
  });

  // Delete an item by id
  app.delete("/api/items/:id", function (req, res) {
    db.Item.destroy({ where: { id: req.params.id } }).then(function (dbItem) {
      res.json(dbItem);
      
  // Search for Specific Items then provides JSON
  app.get("/api/:items?", function(req, res) {
    if (req.params.items) {
      // Display the JSON for ONLY that Item.
    
      Item.findOne({
        where: {
          routeName: req.params.items
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Item.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new item
  app.post("/api/new", function(req, res) {
    // Take the request...
    var items = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces
    
    var routeName = items.item.replace(/\s+/g, "").toLowerCase();

    // Adds the item to the database using sequelize
    Item.create({
      routeName: routeName,
      item: items.item,
      area: items.area,
      description: items.description,
      pickup: items.pickup

    });

    res.status(204).end();
  });

  /*
  app.get("/api/holidays/:cat", function(req,res){
    let searchTerm = req.params.cat

    Item.findAll({
            where: {
                season:searchTerm
            }
            res.send(data)

  })
  
  
  */
};
