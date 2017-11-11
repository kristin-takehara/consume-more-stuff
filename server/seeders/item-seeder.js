'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [
       {
      item: 'kawasaki remote drone',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'mac',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
    
      item: 'honda cbr-600',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'designer beer glass',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'phone',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'tobbaco pipe',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      item: 'bmw m3',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'tv',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'doom orginal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
    
      item: '1997 dodge viper',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'projector',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'xbox',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'lazy boy chair',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      item: 'tractor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'mug for big coffee',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'ps4',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
    
      item: '57 chevy truck',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'hunting rifle',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'Gaming computer',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 't-shirt',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: '1910 model - T',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'gameboy',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: '67 shelby mustang',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'alarm clock',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'coffee table',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'toyota supra',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'gym bag',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'cd player vintage',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'honda civic',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'table',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'drone',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'couch',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'honda civic',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'dslr 70d',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'knitty truck',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'samsung galaxy',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      item: 'bed',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};