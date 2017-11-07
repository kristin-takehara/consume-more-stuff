const express = require('express');
const db = require('../models');
const item = db.Item;

const router = express.Router();

router.route('/')
.get((req, res) => {
 return item.findAll()
 .then((items) => {
    console.log('list of items returned');
    return res.json(items);
  })
 .catch((err) => {
    console.log(err);
    return res.json(err);
 });
})

.post((req, res) => {
  const details = req.body;

  return item.create({
    price : details.price,
    name : details.name,
    description : details.description,
    category : details.category,
    user_id : details.user_id,
    condition : details.condition,
    is_sold : details.is_sold
  })
  .then((newItem) => {
    console.log('new item created');
    return res.json(newItem);
  })
  .catch((err) => {
    console.log(err);
    return res.json(err);
  });
});

router.route('/:id')
.get((req, res) => {
  return item.findById(req.params.id)
  .then((itemDetails) => { 
    console.log("Item found");
    return res.json(itemDetails);
  })
  .catch((err => {
    console.log(err);
    return res.json (err);
  }));
});

module.exports = router;
