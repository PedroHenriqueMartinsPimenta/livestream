var express = require('express');
var fs = require('fs');
var routes = express.Router();

routes.get('/', function(req, res){
    res.render('index');
});

routes.get('/recorder/', function(req, res){
    res.render('recoder');
});

routes.get('/live/', function(req, res){
    res.render('live');
});


module.exports = routes;