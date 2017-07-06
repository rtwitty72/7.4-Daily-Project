const turtleController = require('/controllers/turtleController.')

module.exports = {
list: function(req, res){
  Turtle.find().then(results =>{
    res.render('tmnt/list', {model:results});
    console.log(results);
  });


  }
};
