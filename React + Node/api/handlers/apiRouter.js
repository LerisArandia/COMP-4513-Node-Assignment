const express = require('express');
// const ImageModel = require('./models/Image.js');
const UserModel = require('../models/User.js');
const MovieModel = require('../models/Movie.js');
const helper = require('./helpers.js');
const mongoose = require('mongoose');

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
         console.log(data);
         resp.json(data);
      }
   });
});

//handle request for title substring 
router.get('/find/title/:title', helper.ensureAuthenticated, (req, resp) => {
   const title = req.params.title.toLowerCase();
   MovieModel.find({ 'title': req.params.title }, (err, data) => {
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

module.exports = router;