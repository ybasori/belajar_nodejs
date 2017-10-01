var express = require('express');
var route = express();
const conn = require('../database/connection');
var db = require('../database/dbquery');
var bodyParser = require('body-parser');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({extended:false}));

module.exports = route;

route.get('/', function(req, res){
    var sql=db.get('posts', 'id DESC');
    
    conn().query(sql, (error, results, fields)=>{
        if(error) throw error;
        res.render("pages/welcome", {results});
    });
    
});
route.get('/delete/:id', function(req, res){
    var sql=db.delete('posts', 'id', req.params.id);
    conn().query(sql, (error, results)=>{
        if(error) throw error;
        res.redirect('/');
    });
    
});
route.post('/update/:id', function(req, res){
    var post ={ title:req.body.title, body:req.body.content};
    var sql=db.update('posts', 'id', req.params.id);
    conn().query(sql, post, (error, results)=>{
        if(error) throw error;
        res.redirect('/');
    });
    // console.log(req.body.title);
    
});
route.post('/', function(req, res){
    var post ={ title:req.body.title, body:req.body.content};
    var sql=db.insert('posts');
    conn().query(sql, post, (error, results)=>{
        if(error) throw error;
        res.redirect('/');
    });
});