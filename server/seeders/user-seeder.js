'use strict';

 var Sequelize = require('sequelize');
 var env       = process.env.NODE_ENV || 'development';
 var config    = require('../config/config.json')[env];
 var sequelize = new Sequelize(config.database, config.username, config.password, config);
 const faker = require('faker');
 const db = require('../models');
 const Condition = db.Condition;
 // const Category = db.Category;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Condition.findAll({ distinct: 'condition' })
      .then(conditions => {
        const users = generateFakeUsers(25, conditions);
        return queryInterface.bulkInsert('users', users, {});
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

function generateFakeUsers(count, conditions) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const newItem = {
      username: faker.commerce.product(),
      condition_id: Math.floor(Math.random() * 4) + 1,
      category_id: Math.floor(Math.random() * 4) + 1,
      user_id: 1,
      is_sold: Math.floor(Math.random() * 2) + 1 
    };

    users.push(newItem);
  }
  return users;
}

