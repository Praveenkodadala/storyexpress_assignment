'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

        type: Sequelize.INTEGER
      },



      movieid:{
        type: DataTypes.INTEGER(11)
      },
      
          title: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          genres:{
            type: DataTypes.STRING,
          },
      
      

      // content: Sequelize.STRING(300),
      // ratingId: Sequelize.INTEGER,


      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies');
  }
};

