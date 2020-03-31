const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const parser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
/* ----- add new requires here ------- */
const passport = require('passport');
const flash = require('express-flash');


// use .env file for configuration constants
require('dotenv').config();

// create connection to database
require('./handlers/dataConnector.js').connect();

// create an express app
const app = express();

// view engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs');

// serves up static files from the public folder. 
app.use(express.static('public'));
app.use('/static', express.static('public'));

// setup express middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Express session
app.use(cookieParser('oreos'));
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
  })
);

/* ----- add new code here ------- */
// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// use express flash
app.use(flash());

//set up passport authentication
require('./handlers/auth.js');

//set up route handlers
const openRoutes = require('./handlers/openRouter.js');
app.use('/', openRoutes);

//these routes only if logged in
const apiRoutes = require('./handlers/apiRouter.js');
app.use('/api', apiRoutes);


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error: err });
});

// Use express to listen to port
let port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Server now running at port= " + port);
});