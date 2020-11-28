const Sequelize = require("sequelize");
const links = require("../models/links");

const Link = require('../models').Link;


module.exports = {
  create(req, res) {
    return Link
      .create({
        movieid : req.body.movieid,
        imdbid : req.body.imdbid,
        tmdbid :req.body.tmdbid
      })
      .then((link) => res.status(201).send(link))
      .catch((error) => res.status(400).send(error));
  },


  list(req, res) {
    return Link
      .findAll()
      .then(links => {
        res.status(200).send(links)
        //console.log("All Movies:", JSON.stringify(movies));
      })

      .catch((error) => res.status(400).send(error));
  },





} 