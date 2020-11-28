 'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userid: {
        type: Sequelize.INTEGER
      },

      movieId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Movies',
          key: 'id',
          as: 'movieId'

        }

      },

      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE


    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ratings');


  }

}




