const express = require('express');
const router = express.Router();

router.use('user', require('./user'));
router.user('item', require('./item'));

module.exports = router;