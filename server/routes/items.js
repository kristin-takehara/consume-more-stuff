const express = require('express');
const db = require('../models');
const upload = require('../lib/upload');
const isAuthenticated = require('../lib/authenticate');

const Item = db.Item;
const User = db.User;
const Category = db.Category;
const Condition = db.Condition;
const ItemStatus = db.ItemStatus;

const router = express.Router();

router.route('/')
.get((req, res) => {
 return Item.findAll({
  where : { deletedAt : null },
  include : [
    { model : Category, as : 'Category' },
    { model : Condition, as : 'Condition' },
    { model : ItemStatus, as : 'Status'},
    { model : User, as : 'User',
      attributes : { exclude : ['password'] }
    }
  ]
 })
 .then((items) => {
    console.log('list of items returned');
    return res.json(items);
  })
 .catch((err) => {
    console.log(err);
    return res.json(err);
 });
})
.post(upload.single('userPhoto'), (req, res) => {
  const details = req.body;
  let file = req.file;
  let path = '';

  return Item.create({
    url: path ? file.path:'',
    name : details.name,
    description : details.description,
    manufacturer : details.manufacturer,
    price : details.price,
    category_id : details.category_id,
    condition_id : details.condition_id,
    is_sold : 2,
    user_id : details.user_id
  })
  .then((newItem) => {
    return newItem.reload({
      include : [
        { model : Category, as : 'Category' },
        { model : Condition, as : 'Condition' },
        { model : ItemStatus, as : 'Status'},
        { model : User, as : 'User',
          attributes : { exclude : ['password'] } }
      ]
    });
  })
  // .then((newItem) =>{
  //   res.send('<img src="/uploads/' + req.file.filename + '" />');
  // })
  .then(newItem => {
    return res.json(newItem);
  })
  .catch((err) => {
    console.log(err);
    return res.json(err);
  });
});

router.route('/:id')
.get((req, res) => {
  return Item.findById(req.params.id, {
    where : { deletedAt : null },
    include : [
      { model : Category, as : 'Category' },
      { model : Condition, as : 'Condition' },
      { model : ItemStatus, as : 'Status'},
      { model : User, as : 'User',
        attributes : { exclude : ['password'] } },
    ]
  })
  .then((itemDetails) => {
    return res.json(itemDetails);
  })
  .catch((err => {
    console.log(err);
    return res.json (err);
  }));
})
.put(isAuthenticated, (req, res) => {
  let change = req.body;

  // prevents a logged in user from updating another user's post unless admin or the user that created the post
  if (req.user.id !== change.user_id ||
      req.user.role !== 'admin') {
    return { success: false };
  }

  return Item
  .update({
    name: change.name,
    description: change.description,
    price: change.price,
    manufacturer: change.manufacturer,
    category_id: change.category_id,
    condition_id: change.condition_id,
    is_sold: change.is_sold,
    user_id: change.user_id
  },
  {
    where: { id: change.id },
    returning: true
  })
  .then(updatedItem => {
    updatedItem[1][0].reload({
      include: [
        { model : Category, as : 'Category' },
        { model : Condition, as : 'Condition' },
        { model : ItemStatus, as : 'Status'},
        { model : User, as : 'User',
          attributes : { exclude : ['password'] } }
      ]
    })
    .then(updatedItemDetails => {
      res.json(updatedItemDetails);
    });
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  });
})
.delete(isAuthenticated, (req, res) => {
  let id = req.params.id;

  // prevents a logged in user from deleting another user's post unless admin or the user that created the post
  // if (req.user.id !== change.user_id ||
  //     req.user.role !== 'admin') {
  //   return { success: false };
  // }

  return Item.findById(id)
  .then(foundItem => {
    return foundItem.update({
      deletedAt: new Date()
    });
  })
  .then(response => {
    res.json({
      success: true
    });
  })
  .catch(err => {
    console.log(err);
    res.json(err);
  });
});

module.exports = router;
