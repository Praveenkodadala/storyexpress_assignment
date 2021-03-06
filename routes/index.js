

const moviesController = require('../controllers/index').movies;
const ratingController = require('../controllers/index').ratings;
const linksController = require('../controllers/index').links;
const tagsController = require('../controllers/index').tags

module.exports = (app)=>{
    app.get('/api', (req, res)=>{
        res.send('api is working');


    })


app.post('/api/moviecreate', moviesController.create);
app.get('/api/moviesall', moviesController.list);

app.post('/api/ratingcreate', ratingController.create);
app.get('/api/ratingall', moviesController.list);



app.post('/api/linkcreate', linksController.create);
app.get('/api/linkall', moviesController.list);


app.post('/api/tagcreate', tagsController.create);
app.get('/api/tagall', moviesController.list);

}

