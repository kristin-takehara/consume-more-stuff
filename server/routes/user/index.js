const express = require('express');
const router = express.Router;
const db = require('../../models');
const users = db.users;


// fetching user routes 
router.get('/', (req,res)=> {
  users.all().then((users) =>{
    console.log(users, ' USERS ROUTER REPORTING IN');
    res.json(users);
  });
});

// get by Id
router.get('/:id', (req,res) => {
  users.findBydId(req.params.id)
  .then((user) =>{
    res.json(user);
  });
});