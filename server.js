
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var request = require("request");
// var config = require("./connection.js");
var bodyParser = require("body-parser")
// var mongojs = require("mongojs");
var routes = require("./routes");


var corsOptions = {
    origin: process.env.ORIGIN_URL || "http://localhost",
    optionsSuccessStatus: 200
  };

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
 
app.use("/cors/*", function(req, res) {
    req.pipe(request(req.params[0])).pipe(res);
  });

// ================================================================================
// DATABASE
// Sets up Storage using Mongo
// ================================================================================


// Use mongojs to hook the database to the db variable
// var db = mongojs(config.database);


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// Import routes and give the server access to them.

app.use(routes);


// Static directory
app.use(express.static("./public"));

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================


  app.listen(PORT, function () {
    console.log("CORS-enabled web server listening on port " + PORT);
  });