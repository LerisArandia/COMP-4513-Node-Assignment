const express = require('express');
// const ImageModel = require('./models/Image.js');
const UserModel = require('../models/User.js');
const MovieModel = require('../models/Movie.js');
const BriefModel = require('../models/Brief.js');
const helper = require('./helpers.js');
const mongoose = require('mongoose');
<<<<<<< HEAD
const _ = require('lodash');
=======
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b

const router = express.Router();

router.get('/users/:id', helper.ensureAuthenticated, (req, resp) => {
   UserModel.find({ id: req.params.id }, (err, data) => {
      if (err) {
         resp.json({ message: 'User not found' });
      } else {
         resp.json(data);
      }
   });

});

router.get('/movies', helper.ensureAuthenticated, (req, resp) => {
   MovieModel.find({}, (err, data) => {
      if (err) {
         resp.json({ message: 'Unable to connect to Movies' });
      } else {
         //return JSON received by Mongo as response
         resp.json(data);
      }
   });
});

router.get('/movies/:id', helper.ensureAuthenticated, (req, resp) => {
   MovieModel.find({ id: req.params.id }, (err, data) => {
      if (err || data.length === 0) {
         resp.json({ message: 'Movie not found' });
      } else {
         resp.json(data);
      }
   });
});

//handle request for title substring 
router.get('/find/title/:title', helper.ensureAuthenticated, (req, resp) => {
   MovieModel.find({ 'title': new RegExp(req.params.title, 'i') }, (err, data) => {
      if (err || data.length === 0) {
         resp.json({ message: "No movie containing " + req.params.title });
      }
      else {
         resp.json(data);
      }
   })
})

// handle request for rating
router.get('/find/rating/:r1/:r2', helper.ensureAuthenticated, (req, resp) => {
   MovieModel.find().where('ratings.average')
      .gt(req.params.r1)
      .lt(req.params.r2)
      .exec(function (err, data) {
         if (err || data.length === 0) {
            resp.json({ message: "No movies within " + req.params.r1 + "and " + req.params.r2 });
         }
         else {
            resp.json(data);
         }
      })
})

// handle request for year
router.get('/find/year/:y1/:y2', helper.ensureAuthenticated, (req, resp) => {
   MovieModel.find().where('release_date')
      .gt(req.params.y1)
      .lt(req.params.y2)
      .exec((err, data) => {
         if (err || data.length === 0) {
            resp.json({ message: "No movies found" });
         } else {
            resp.json(data);
         }
      });
})

// handle movie brief
router.get('/brief', helper.ensureAuthenticated, (req, resp) => {
   BriefModel.find({}, function (err, data) {
      if (err || data.length === 0) {
         resp.json({ message: 'Unable to retrieve brief movies.' });
      }
      else {
         resp.json(data);
      }
   })
})

<<<<<<< HEAD
// get user favorites
router.get('/favorites/:id', helper.ensureAuthenticated, (req, resp) => {
   UserModel.find({ id: req.params.id }, (err, data) => {
      if (err) {
         resp.json({ message: 'User not found' });
      } else {
         console.log(data.favorites);
         resp.json(data[0].favorites);
      }
   });
})

// post a new favorite
router.post('/favorites/:id', helper.ensureAuthenticated, (req, resp) => {
   UserModel.find({ id: req.params.id }, (err, data) => {
      if (err) {
         resp.json({ message: 'User not found' });
      } else {
         data[0].favorites.push(req.body);
         resp.json(data[0].favorites);
      }
   });
})

// delete a favorite
router.delete('/favorites/:id'), helper.ensureAuthenticated, (req, resp) => {
   UserModel.find({ id: req.params.id }, (err, data) => {
      const movieToDelete = req.body.id;
      let index = _.findIndex(data[0].favorites, ['id', movieToDelete]);
      if (index < 0) {
         resp.json({ message: 'User not found' });
      } else {
         _.remove(data[0].favorites, _.find(data[0].favorites, ['id', movieToDelete]));
         resp.json(data[0].favorites);
      }
   });
}

=======
>>>>>>> 716ab5df56f652b089beea63220cc8611bb5006b



module.exports = router;