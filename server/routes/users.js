const express = require('express');
const router = express.Router();
const db = require('../models');
const User = db.User;

// fetching user routes
router.route('/')
.get((req, res) => {
 return User.findAll()
 .then((users) => {
    console.log('list of users returned');
    return res.json(users);
  });
});

router.route('/:id')
.get((req, res) => {
  return User.findById(req.params.id)
  .then((userDetails) => {
    console.log('User found');
    return res.json(userDetails);
  });
});

router.post('/register', (req, res) => {
  const details = req.body;

  User.create({
    username : details.username,
    password : details.password
  })
  .then((userDetails) => {
    console.log('user created');
    res.json(userDetails);
  })
  .catch( (err) => {
    console.log(err);
    res.json(err);
  });
});

module.exports = router;