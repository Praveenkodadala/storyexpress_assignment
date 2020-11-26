const Sequelize = require("sequelize");

const Movie = require('../models').Movie;


module.exports = {
  create(req, res) {
    return Movie
      .create({
        title : req.body.title,
      })
      .then((todo) => res.status(201).send(todo))
      .catch((error) => res.status(400).send(error));
  },
}