var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var methodOverride = require('method-override');
var PORT = process.env.PORT || 8080;
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// this goes before any body-parser calls - static files dont need parsing.
// app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(path.join(__dirname, 'public')));


// parse application/x-www-form-urlencoded 
// found urlencoded extended must be true for nested arrays and for post method
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
 

// parse an HTML body into a string 
app.use(bodyParser.text({ type: 'text/html' }));

// populate database initially - dont erase existing data
// require("./controllers/scraper.js");

require("./controllers/apiController.js")(app);


app.listen(PORT);