const mongoose = require('mongoose');

const turtleSchema = new mongoose.Schema({
  name: {type:String, required:true, unique:true},
  costume: [{
    color: {type: String, required: true, default:1},
    weapon: {type: String, required: true},
    skills: {type: Number}

  }],

});

const Turtle = mongoose.model('Turtle', turtleSchema);

module.exports = Turtle;
