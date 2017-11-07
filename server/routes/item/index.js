const express = require('express');
const router = express.Router();
const db = require('../../models');
const items = db.items;

router.get('/', (req,res) => {
  items.all().then((items) =>{
    console.log(items, " ITEMS ROUTER HERE!!!");
    res.json(items);
  });
});

router.post('/new', (req, res)=>{
  // maybet set items object to empty strings.
  console.log("POST ROUTE");
});