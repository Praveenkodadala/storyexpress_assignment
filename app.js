const express = require('express');

const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const port = 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const db = require('./connection'); 


require('./routes/index')(app)
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to api',
 
}));

app.listen(port, ()=>{
    console.log(`running at ${port}`);
});