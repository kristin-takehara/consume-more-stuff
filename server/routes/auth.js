const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const session = require('express-session');
const db = require('../models');
const User = db.User;
const saltRounds = 12;

const router = express.Router();
//----------NAVIGATION MENU----------LOGIN/LOGOUT/REGISTER

//LogIN an authenticated user
router.post('/login',
  passport.authenticate('local'), (req, res) => {
  // if authentication is successful this will be sent
  // front end should check if returned object has a success key with true
  return res.json({
    id : req.user.id,
    username : req.user.username,
    success : true
  });
});

//LogOUT a user
router.get('/logout', (req, res) => {
  console.log("Serverside hitting Logout");
  req.logout(); //fire logout request
  res.sendStatus(200);
});

router.post('/register', (req, res) => {
  // need to check if user already exists first
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      User.create({
        username: req.body.username,
        password: hash,
        role: 2
      })
      .then((newUserDetails) => {
        console.log('new user registered');
        return res.json({
          id : newUserDetails.id,
          username : newUserDetails.username
        });
      })
      .catch((err) => {
        console.log("error", err);
        return res.json({
          success : false
        });
      });
    });
  });
});

module.exports = router;