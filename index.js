var express = require('express');
var handler=require('./handler');
var app = express();

app.use(handler.router);

var server=app.listen(3000,function(){
  console.log('This application uses port %d', server.address().port)
});
