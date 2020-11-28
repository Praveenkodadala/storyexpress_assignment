

module.exports = (sequelize, DataTypes)=>{

  const Movie = sequelize.define('Movie', {
    
    
    
    title : {
      type : DataTypes.STRING,
      allowNull : false,
    },

   genres : {
    type : DataTypes.STRING,
    allowNull : false,

   }

  } );

  Movie.associate = (models)=>{
  
    Movie.hasMany(models.Rating, {
      foreignkey :'movieID',
      as : 'rating',
    })

  }

return Movie;

}