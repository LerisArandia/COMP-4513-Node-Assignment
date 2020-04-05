const express = require('express');
const router = express.Router();
const passport = require('passport');
const helper = require('./helpers.js');

// Welcome Page
router.get('/', helper.ensureAuthenticated, (req, resp) => {
   resp.redirect('http://localhost:3000/');
});

router.get('/login', (req, resp) => {
   resp.render('login', { message: req.flash('error') });
});

router.get('/logout', (req, resp) => {
   req.logout();
   req.flash('info', 'You were logged out');
   resp.render('login', { message: req.flash('info') });
});

router.post('/login', async (req, resp, next) => {
   // use passport authentication to see if valid login
   passport.authenticate('localLogin',
      {
         successRedirect: '/',
         failureRedirect: '/login',
         failureFlash: true
      })(req, resp, next);
});

module.exports = router;