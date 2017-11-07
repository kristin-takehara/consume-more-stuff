const express = require('express');
const router = express.Router();
const db = require('../models');
const item = db.Item;


// fetching user routes 
router.get('/items', (req,res)=> {
 return item.findAll().then((items) => {
    console.log(items, ' USERS ROUTER REPORTING IN');
    return res.json(items);
  });
});


router.post('/new', (req, res) => {
console.log(req.body, "THIS IS THE REQ BODY");

console.log(req.body, ' req body card route ZZXXXXXXXCXCXXX ! ! ! ! !! ! ! !! ');
  db.items.create({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate,
    priority: req.body.priority,
    status: req.body.status
  })
  .then( (card) => {
    console.log(items);
    res.json(items);
  })
  .catch( (err) => {
    console.log(err, "ROUTE ERROR FROM /NEW ROUTE ");
    res.json(err);
  });
});

module.exports = router;