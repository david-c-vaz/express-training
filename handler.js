var express=require('express');
var pages = require('./static_pages');

var router=express.Router();
router.get('/',pages.home );
router.get('/test',pages.test );
router.get('/home', pages.home);
router.get('/about', pages.about);

exports.router=router
