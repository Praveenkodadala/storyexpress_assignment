const movies = require('../models/movies');

const moviesController = require('../controllers/index').movies;

module.exports = (app)=>{
    app.get('/api', (req, res)=>{
        res.send('api is working');


    })


app.post('/api/moviecreate', moviesController.create);

}

