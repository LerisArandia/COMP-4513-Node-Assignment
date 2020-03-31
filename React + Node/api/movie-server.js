const express = require('express');
const parser = require('body-parser');

// create connection to database
require('./handlers/dataConnector.js').connect();


//get our data model
const Movie = require('./models/Movie');
const Brief = require('./models/Brief');




//create an express app
const app = express();

//tell node to use json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

//use the routeHandlers
const movieRouter = require('./handlers/movieRouter.js');

movieRouter.handleAllMovies(app, Movie);
movieRouter.handleSingleMovie(app, Movie);
movieRouter.handleRatingRequest(app, Movie);
movieRouter.handleTitleSearch(app, Movie);
//movieRouter.handleYearRequest(app, Movie);

movieRouter.handleMovieBrief(app, Brief);





let port = 3001;

app.listen(port, function () {
    console.log("Server running at port= " + port);
});




///*---- Middleware section -------*/
//
//
//
//
//// serves up static files from the public folder.
//app.use(express.static('public'));
//
//// also add a path to static
//app.use('/static', express.static('public'));
//
//
//

//
//
//

//bookRouter.handleAllBooks(app, Book);
//bookRouter.handleSingleBook(app, Book);
//bookRouter.handleBooksByPageRange(app, Book);
//bookRouter.handleAllCategories(app, Book);
//bookRouter.handleCreateBook(app, Book);
//
//// customize the 404 error with our own middleware function
//app.use(function (req, res, next) {
//    res.status(404).send("Sorry can't find that!") });
//
//
