const express = require('express');

// use .env file for configuration constants
require('dotenv').config();

// create connection to database
require('./handlers/dataConnector.js').connect();

// create an express app
const app = express();

// Use express to listen to port
let port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("Server now running at port= " + port);
});