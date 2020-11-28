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

      // movieid: {
      //   type: Sequelize.INTEGER(11)
      // },

      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      genres: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('movies');
  }
};
