var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Item.findAll({}).then(function(dbItems) {
      res.render("index", {
        msg: "Welcome!",
        items: dbItems
      });
    });
  });

  //**CREATE GET request based on database categories */
  //Load list of items by category
  app.get("/categories", function(req, res) {
    db.Item.findAll({}).then(function(dbItems) {
      res.render("categories", {
        msg: "Welcome!",
        items: dbItems
      });
    });
  });

  // Load item page and pass in an item by id
  app.get("/item/:id", function(req, res) {
    db.Item.findOne({ where: { id: req.params.id } }).then(function(dbItem) {
      res.render("item", {
        item: dbItem
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
