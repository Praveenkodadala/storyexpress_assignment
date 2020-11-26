'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
await queryInterface.createTable('ratings', {
  id : {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },



    userid:{
      type: DataTypes.INTEGER
    },

    movieid:{
      type: DataTypes.INTEGER
    },

  
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
      unique: true
      },
  




     
  })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ratings');
     
    
  }

}

