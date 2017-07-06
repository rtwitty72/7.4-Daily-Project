const mongoose = require('mongoose');
const Turtle = require('./models/tmnt');
const express = require('express');
const mustacheExpress = require('mustache-Express');
const turtleController = require('./models/tmnt');
const bodyParser = require('body-parser');


var app = express();

mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/turtles');

const turtle = new Turtle({name: 'Color-Changing Raphael'});
turtle.costume.push({color:'red', weapon:'Sais'});

turtle.save();

app.get('/', function(req, res){
  res.render('');
});
  console.log(turtle);





console.log(turtle.toObject());


app.listen(3000);
