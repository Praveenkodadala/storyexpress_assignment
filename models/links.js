'use strict';

// const { DataTypes } = require("sequelize/types");

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class links extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   links.init({
//     imdbid: DataTypes.INTEGER,
//     complete: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'links',
//   });
//   return links;
// };


const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
const Link = sequelize.define('Link', {
  id : {
    type: DataTypes.INTEGER(11),
allowNull: false,
autoIncrement: true,
primaryKey: true
  },

movieid:{
  type: DataTypes.INTEGER(11),
},
imdbid:{
  type: DataTypes.INTEGER(11),
},
tmdbid:{
  type: DataTypes.INTEGER(11),
}

})
return Link

}
