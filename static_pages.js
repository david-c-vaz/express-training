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

