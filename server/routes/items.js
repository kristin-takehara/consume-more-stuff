const express = require('express');
const db = require('../models');
const item = db.Item;

console.log(db.Item);

// Express Router
const router = express.Router();

// fetching user routes 
router.route('/')
.get((req,res ) => {
 return item.findAll().then((items) => {
    console.log(items, ' USERS ROUTER REPORTING IN');
    return res.json(items);
  });
})

.post((req, res) => {
  console.log(req.body, "THIS IS THE REQ BODY");
  item.create({
    price: req.body.price,
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    user_id: req.body.user_id,
    condition: req.body.condition,
    is_sold: req.body.is_sold
  })
  .then((newItem) => {
    console.log(newItem, ' NEW ITEM CL');
    res.json(newItem);
  })
  .catch((err) => {
    console.log(err, "ROUTE ERROR FROM /NEW ROUTE ");
    res.json(err);
  });
});

router.route('/:id')
.get((req, res) => {
  return item.findById(req.params.id)
  .then((item) => { 
    console.log("ITEM ON LINE 50 ", item);
    return res.json(item);
  });
});

module.exports = router;
