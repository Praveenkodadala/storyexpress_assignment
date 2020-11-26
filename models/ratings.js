// const Sequelize = require("sequelize");

// module.exports = sequelize.define("Rating", {
// id: {
// type: Sequelize.INTEGER(11),
// allowNull: false,
// autoIncrement: true,
// primaryKey: true
// },
// rating: {
// type: Sequelize.INTEGER,
// allowNull: false,
// unique: true
// },

// });


const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define('Rating', {

    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },

    userid:{
      type: DataTypes.INTEGER
    },

    movieid:{
      type: DataTypes.INTEGER
    },



    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },



  });



  return Rating;
};