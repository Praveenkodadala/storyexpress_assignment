'use strict';




module.exports = (sequelize, DataTypes)=>{

  const Rating = sequelize.define('Rating', {
    
    userid:{
   type : DataTypes.INTEGER,
   allowNull : false,
    },

    rating : {
      type : DataTypes.INTEGER,
      allowNull : false,
    }


  } );


  Rating.associate = (models)=>{
    Rating.belongsTo(models.Movie, {
      foreignkey : 'movieid',
      onDelete : 'CASECADE'

    })

  }


return Rating;
}
