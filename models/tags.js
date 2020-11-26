'use strict';

// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class tags extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   tags.init({
//     tag: DataTypes.STRING,
//     complete: DataTypes.BOOLEAN
//   }, {
//     sequelize,
//     modelName: 'tags',
//   });
//   return tags;
// };


///


const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
const Tag = sequelize.define( 'Tag',{
  id:{
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

tag:{
  type: DataTypes.STRING,
}



})

return Tag

}
