'use strict';


const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) =>{
const Tag = sequelize.define( 'Tag',{
  
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
