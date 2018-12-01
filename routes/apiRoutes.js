var moment = require("moment");
moment().format();

var Item = require("../models/items.js");
var Sequelize = require("sequelize")

// Routes
// =============================================================
module.exports = function (app) {
  app.get("/api", function (req, res) {

    Item.findAll().then(function (result) {
      return res.json(result);
    });

  });

  app.get("/api/id/:id", function (req, res) {
    if (req.params.id) {
      // Display the JSON for ONLY that Item.
      console.log(req.params.id)
      Item.findOne({
        where: {
          id: req.params.id
        }
      }).then(function (result) {
        return res.json(result);
      });
    } else {
      Item.findAll().then(function (result) {
        return res.json(result);
      });
    }
  });

  // Search for Specific Items then provides JSON
  app.get("/api/:items?", function (req, res) {
    if (req.params.items) {
      // Display the JSON for ONLY that Item.

      Item.findOne({
        where: {
          routeName: req.params.items
        }

      }).then(function (result) {
        console.log("running");
        return res.json(result);
      });
    } else {
      Item.findAll({
        where: {
          availableUntil: {
            [Sequelize.Op.gte]: moment().format("YYYY-MM-DD")
          }
        }
      }).then(function (result) {
        return res.json(result);
      });
    }
  });


  app.delete("/api/items/:id", function (req, res) {
    db.Item.destroy({ where: { id: req.params.id } }).then(function (dbItem) {
      res.json(dbItem);

    })
  })

      // If a user sends data to add a new item
      app.post("/api", function (req, res) {
        // Take the request...
        var items = req.body;
        console.log('i am the items', items)
        // Create a routeName

        // Using a RegEx Pattern to remove spaces

        var routeName = items.item.replace(/\s+/g, "").toLowerCase();

        // Adds the item to the database using sequelize
        Item.create({
          routeName: routeName,
          item: items.item,
          area: items.area,
          description: items.description,
          pickup: items.pickup,
          image: items.image,
          availableUntil: items.availableUntil

        });

        res.status(204).end();
      });


      app.delete("/api/id/:id", function (req, res) {
        Item.destroy({ where: { id: req.params.id } }).then(function (dbItem) {
          console.log(dbItem)
          if (dbItem != null) {
            console.log('not null');
            return res.status(404).end();
          }
          else {
            console.log('CLAIMED');
            res.status(200).end();
          }
        })
      })
      app.put("/api/id/:id", function (req, res) {
        Item.update({ claimed: true },
          { where: { id: req.params.id } })
          .then(function (dbItem) {
            console.log(dbItem)
            if (dbItem != null) {
              console.log('not null');
              //location.reload();
              //return res.status(404).end();
            }
            else {
              console.log('CLAIMED');
              res.status(200).end();
            }
          })
      })
    }




