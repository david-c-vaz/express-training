var mongoose   = require('mongoose');
var User = require('./app/models/user');

exports.home=function(req,response,next){
  response.status(200).send("Welcome Home!");
  next();
}

exports.about=function(req,response,next){
  response.status(200).send("This page is About Us!");
  next();
}

exports.test=function(req,response,next){
  response.status(200).send("Path : "+req.custom_path+" &  QueryString : "+req.queryString);
  next();
}

exports.blogs=function(req,response,next){
  mongoose.connect('mongodb://localhost/test_db'); // connect to our database
  response.json({ message: "This is a sample message!"});
  next();
}

exports.createUser=function(req,response,next){
  var user=new User();
  user.name=req.body.name
  user.save(function(err){
    if (err)
      res.send(err);
    else
      res.json({message: 'User Created'});
  });  

}
