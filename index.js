var express = require('express');
var app = express();
var validator = require('./validation');

app.get('/', function(req, res){
  res.status(200).send('HostName '+req.hostname+":"+server.address().port);
});

var server=app.listen(3000,function(){
  console.log('This application uses port %d', server.address().port)
});
