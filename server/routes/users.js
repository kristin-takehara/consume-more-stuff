const express = require('express');
const router = express.Router();
const db = require('../models');
const user = db.User;

// fetching user routes 
router.route('/')
.get((req, res) => {
 return user.findAll()
 .then((users) => {
    console.log('list of users returned');
    return res.json(users);
  });
});

router.route('/:id')
.get((req, res) => {
  return user.findById(req.params.id)
  .then((userDetails) => {
    console.log('User found');
    return res.json(userDetails);
  });
});

router.post('/register', (req, res) => {
  const details = req.body;

  user.create({
    username : details.username,
    password : details.password
  })
  .then((user) => {
    console.log('user created');
    res.json(user);
  })
  .catch( (err) => {
    console.log(err);
    res.json(err);
  });
});

module.exports = router;