var express = require('express');
var fs = require('fs');
var routes = express.Router();

routes.get('/', function(req, res){
    res.render('index');
});

routes.get('/recoder/:id', function(req, res){
    res.render('recoder');
});

routes.get('/live/:id', function(req, res){
    res.render('live');
});

routes.get('/test/:movieName', function(req, res){
    
});

module.exports = routes;