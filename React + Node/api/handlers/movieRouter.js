const express = require('express');
const MovieModel = require('../models/Movie.js');
const helper = require('./helpers.js');
const router = express.Router();

//handle all movies
router.get('/api/movies', helper.ensureAuthenticated, (req, resp) => {
    MovieModel.find({}, function (err, data) {
        if (err) {
            resp.json({ message: 'Unable to conntec to Movies' });
        } else {
            //return JSON received by Mongo as response
            resp.json(data);
        }
    })
})

// const handleAllMovies = (app, Movie) => {
//     app.route('/api/movies')
//         .get(function (req, resp) {
//             Movie.find({}, function (err, data) {
//                 if (err) {
//                     resp.json({ message: 'Unable to conenct to Movies' });
//                 } else {
//                     //return JSON received by Mongo as response
//                     resp.json(data);
//                 }
//             });
//         });
// };

//handle request for a single movie with specific id
router.get('/api/movies/:id', helper.ensureAuthenticated, (req, resp) => {
    MovieModel.find({ 'id': req.params.id }, function (err, data) {
        if (err) {
            resp.json({ message: "Movie Not Found" });
        }
        else {
            resp.json(data);
        }
    })
})



// const handleSingleMovie = (app, Movie) => {
//     app.route('/api/movies/:id')
//         .get(function (req, resp) {
//             Movie.find({ 'id': req.params.id }, function (err, data) {
//                 if (err) {
//                     resp.json({ message: "Movie Not Found" });
//                 }
//                 else {
//                     resp.json(data);
//                 }
//             })
//         })
// }


//handle request for title substring 
const handleTitleSearch = (app, Movie) => {
    app.route('/api/find/title/:title')
        .get(function (req, resp) {
            const title = req.params.title.toLowerCase();
            Movie.find({ 'title': req.params.title }, function (err, data) {
                if (err) {
                    resp.json({ message: "Movie Not Found" });
                }
                else {
                    resp.json(data);
                }
            })

            //        const matches = Movie.filter( (obj) => obj.title.toLowerCase().includes(title)) ;
            //        
            //        resp.json(matches);

        })
}

//handle request for rating
const handleRatingRequest = (app, Movie) => {
    app.route('/api/find/rating/:r1/:r2')
        .get(function (req, resp) {
            Movie.find().where('ratings.average')
                .gt(req.params.r1)
                .lt(req.params.r2)
                .exec(function (err, data) {
                    if (err) {
                        resp.json({ message: 'Movie not found' });
                    }
                    else {
                        resp.json(data);
                    }
                })
        })
}

//handle request for year 
const handleYearRequest = (app, Movie) => {
    app.route('/api/find/year/:y1/:y2')
        .get(function (req, resp) {
            Movie.find().where('release_date').substring(0, 5)
                .gt(req.params.y1)
                .lt(req.params.y2)
                .exec(function (err, data) {
                    if (err) {
                        resp.json({ message: 'Movie not found' });
                    }
                    else {
                        resp.json(data);
                    }
                })
        })
}

//handle Movie Brief
const handleMovieBrief = (app, Brief) => {
    app.route('/api/brief')
        .get(function (req, resp) {
            Brief.find({}, function (err, data) {
                if (err) {
                    resp.json({ message: 'Unable to conenct to Movies' });
                }
                else {
                    resp.json(data);
                }
            })
        })
}


module.exports = router;