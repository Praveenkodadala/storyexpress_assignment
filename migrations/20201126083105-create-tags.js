'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER
      },
      movieid: {
        type: Sequelize.INTEGER
      },

      tag: {
        type: Sequelize.STRING,
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE


    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tags');
  }
};