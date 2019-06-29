
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

const express = require("express");
const request = require("request");
// const config = require("./connection.js");
const bodyParser = require("body-parser")
// const mongojs = require("mongojs");
const pageRouter = require("./routes/htmlRoutes");
// const mailRouter = require("./routes/mailRoutes");
// const apiRouter = require("./routes/apiRoutes");


// const corsOptions = {
//     origin: process.env.ORIGIN_URL || "http://localhost",
//     optionsSuccessStatus: 200
//   };

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8000;



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors())
 
// app.use("/cors/*", function(req, res) {
//     req.pipe(request(req.params[0])).pipe(res);
//   });

// ================================================================================
// DATABASE
// Sets up Storage using Mongo
// ================================================================================


// Use mongojs to hook the database to the db variable
// const db = mongojs(config.database);


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

// Import routes and give the server access to them.

app.use("/", pageRouter);
// app.use("/", mailRouter);
// app.use("/api", apiRouter);


// Static directory
app.use(express.static("./public"));

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================


  app.listen(PORT, function () {
    console.log("app listening on port " + PORT);
  });