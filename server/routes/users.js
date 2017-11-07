const express = require('express');
const router = express.Router();
const db = require('../models');
const user = db.User;


// fetching user routes 
router.get('/', (req,res)=> {
 return user.findAll().then((users) => {
    console.log(users, ' USERS ROUTER REPORTING IN');
    return res.json(users);
  });
});

module.exports = router;