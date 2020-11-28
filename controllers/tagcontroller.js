const Sequelize = require("sequelize");

const Tag = require('../models').Tag;


module.exports = {
    create(req, res) {
      return Tag
        .create({
          userid : req.body.userid,
          movieid : req.body.movieid,
          tag :req.body.tag
        })
        .then((tag) => res.status(201).send(tag))
        .catch((error) => res.status(400).send(error));
    },
  } 
  