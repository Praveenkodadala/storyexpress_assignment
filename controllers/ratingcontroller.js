const Sequelize = require("sequelize");
const ratings = require("../models/ratings");

const Rating = require('../models').Rating;



module.exports = {
  create(req, res) {
    return Rating
      .create({
        userid:req.body.userid, 
        movieId:req.params.movieId,
        rating : req.body.rating
        

      })
      .then((rating) => res.status(201).send(rating))
      .catch((error) => res.status(400).send(error));
  },



  list(req, res) {
    return Rating
      .findAll()
      .then(ratings => {
        res.status(200).send(ratings)
        //console.log("All Movies:", JSON.stringify(movies));
      })

      .catch((error) => res.status(400).send(error));
  },




}