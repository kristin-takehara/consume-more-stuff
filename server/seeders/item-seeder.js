'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('items', [
       {
      items: 'kawasaki remote drone',
      name: 'someting',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'cup',
      description:'',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'mac',
      name: 'someting',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
    
      items: 'honda cbr-600',
      name: 'someting',
      description: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'designer beer glass',
      name: 'someting',
      description: '', 
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'phone',
      name: 'someting',
      description: '',  
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: '',
      name: 'someting',
      description: '', 
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      items: 'bmw m3',
      name: 'someting',
      description: 'its something',  
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'tv',
      name: 'someting',
      description: 'hehehohoha', 
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'doom orginal',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
    
      items: '1997 dodge viper',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'projector',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'xbox',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'lazy boy chair',
      createdAt: new Date(),
      updatedAt: new Date()
    },
     {
      items: 'tractor',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'mug for big coffee',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'ps4',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
    
      items: '57 chevy truck',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'hunting rifle',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'Gaming computer',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 't-shirt',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: '1910 model - T',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'gameboy',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: '67 shelby mustang',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'alarm clock',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'coffee table',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'toyota supra',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'gym bag',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'cd player vintage',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'honda civic',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'table',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'drone',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'couch',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'honda civic',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'dslr 70d',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'knitty truck',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'cup',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'samsung galaxy',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      items: 'bed',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('items', null, {});
  }
};