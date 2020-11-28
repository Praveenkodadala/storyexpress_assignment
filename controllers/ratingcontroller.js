const Sequelize = require("sequelize");

const Rating = require('../models').Rating;



module.exports = {
  create(req, res) {
    return Rating
      .create({
        userid:req.body.userid, 
        movieId:req.body.movieId,
        rating : req.body.rating
        

      })
      .then((rating) => res.status(201).send(rating))
      .catch((error) => res.status(400).send(error));
  },
}