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
      foreignkey : 'movieId',
      onDelete : 'CASECADE'

    })

  }


return Rating;
}
