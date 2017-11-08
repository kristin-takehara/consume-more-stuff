const express = require('express');
const users = require('./users');
const items = require('./items');
const auth = require('./auth');

const router = express.Router();

router.use('/users', users);
router.use('/items', items);
// router.use('/auth', auth);

module.exports = router;