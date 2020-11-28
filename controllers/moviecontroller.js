const Sequelize = require("sequelize");

const Movie = require('../models').Movie;


module.exports = {
  create(req, res) {
    return Movie
      .create({
        title : req.body.title,
        genres:req.body.genres
      })
      .then((movie) => res.status(201).send(movie))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Movie
      .findAll()
      .then(movies => {
        res.status(200).send(movies)
        //console.log("All Movies:", JSON.stringify(movies));
      })

      .catch((error) => res.status(400).send(error));
  },





} 