var express = require('express');
var route = express.Router();
var db = require('../database/dbquery');
var bodyParser = require('body-parser');

module.exports = route;

route.get('/', function(req, res){
    res.send("pages/welcome");
});