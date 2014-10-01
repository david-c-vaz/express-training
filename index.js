var express = require('express');
var handler=require('./handler');
var middleware=require('./middleware');
var app = express();
app.use(middleware.urlLoader);
app.use(handler.router);
app.use('/api',handler.api_router);

var server=app.listen(3000,function(){
  console.log('This application uses port %d', server.address().port)
});
