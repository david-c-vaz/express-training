var express = require('express');
var app = express();
var validator = require('./validation');
var pages = require('./static_pages');

app.get('/test',pages.test );

app.get('/home', pages.home);
app.get('/about', pages.about);

var server=app.listen(3000,function(){
  console.log('This application uses port %d', server.address().port)
});
