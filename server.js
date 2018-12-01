
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

var db = require("./models");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// Starting the server, syncing our models ------------------------------------/
/*  db.sequelize.sync(syncOptions).then(function() { */
  db.sequelize.sync({ force: true}).then(function() {
  app.listen(PORT, function() {
    console.log(
      "app listening on port" + PORT
    );
   });
});

 module.exports = app; 
