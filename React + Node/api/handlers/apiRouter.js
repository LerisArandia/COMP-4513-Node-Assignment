const express = require('express');
// const ImageModel = require('./models/Image.js');
const UserModel = require('../models/User.js');
const helper = require('./helpers.js');

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

module.exports = router;