'use strict';

 
//  const {
//    Model
//  } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class movies extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   movies.init({
//     title: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'movies',
//   });
//   return movies;
// };


////

// const Sequelize = require("sequelize");

// module.exports = sequelize.define("Movie", {
// id: {
// type: Sequelize.INTEGER(11),
// allowNull: false,
// autoIncrement: true,
// primaryKey: true
// },
// content: Sequelize.STRING(300)});
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {

id: {
type: DataTypes.INTEGER(11),
allowNull: false,
autoIncrement: true,
primaryKey: true
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
    }
  

  });
 
 

  return Movie;
};
