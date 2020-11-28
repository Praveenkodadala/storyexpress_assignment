'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      movieid: {
        type: Sequelize.INTEGER(11),
      },
      imdbid: {
        type: Sequelize.INTEGER(11),
      },
      tmdbid: {
        type: Sequelize.INTEGER(11),
      },
      
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('links');
  }
};