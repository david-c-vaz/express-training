exports.home=function(req,response){
  response.status(200).send("Welcome Home!");
}

exports.about=function(req,response){
  response.status(200).send("This page is About Us!");
}

exports.test=function(req,response){
//  response.status(200).send('HostName '+req.hostname+":"+server.address().port);
  response.status(200).send('test');
}

