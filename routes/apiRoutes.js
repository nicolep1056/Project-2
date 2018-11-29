var Item = require("../models/items.js");

// Routes
// =============================================================
module.exports = function(app) {
//Pull all API data (working 11/29)
  app.get("/api", function(req, res) {

      Item.findAll().then(function(result) {
        return res.json(result);
      });
    
  });
  // Search for Specific Items then provides JSON (working as of 11/29)
  app.get("/api/:item", function(req, res) {
    
    if (req.params.item) {
      // Display the JSON for ONLY that Item.
    
      Item.findOne({
        where: {
          routeName: req.params.item
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

  app.get("/api/id/:id", function(req, res) {

    if (req.params.id) {
      // Display the JSON for ONLY that Item. (working 11/29)
    console.log(req.params.id)
      Item.findOne({
        where: {
          id: req.params.id
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

/*  app.delete("/api/id/:id", function(req, res) {
    if (req.params.id) {
      // Display the JSON for ONLY that Item.
    
      Item.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      Item.findAll().then(function(result) {
        return res.json(result);
      });
    }
  });*/

  // If a user sends data to add a new item
  app.post("/api", function(req, res) {
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
};




