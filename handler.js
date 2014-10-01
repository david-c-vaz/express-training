var express=require('express');
var pages = require('./static_pages');

var router=express.Router();
router.get('/test',pages.test);
router.get('/', pages.home);
router.get('/about', pages.about);

var api_router=express.Router();
//router.get('/api/users',pages.blogs );
api_router.route('/users').post(pages.createUser);

exports.router=router
exports.api_router=api_router
