const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const parser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
//var cors = require('cors');
/* ----- add new requires here ------- */
const passport = require('passport');
const flash = require('express-flash');
const mongoose = require('mongoose');

// use .env file for configuration constants
require('dotenv').config();

const app = express();

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);

require('./handlers/dataConnector.js').connect();

// view engine setup
app.use(expressLayouts);
app.set('view engine', 'ejs');

// serves up static files from the public folder. 
app.use(express.static('public'));
app.use('/static', express.static('public'));


//app.use(cors());


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
const apiRouter = require('./handlers/apiRouter.js');
app.use('/api', apiRouter);


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({ error: err });
});

app.use(parser.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
})