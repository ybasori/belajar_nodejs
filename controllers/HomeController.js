var express = require('express');
var route = express();
const conn = require('../database/connection');
var db = require('../database/dbquery');
var bodyParser = require('body-parser');
route.use(bodyParser.json());
route.use(bodyParser.urlencoded({extended:false}));

module.exports = route;

route.get('/', function(req, res){
    var sql=db.get('posts', 'created_at DESC');
    
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
    var d=new Date();
    var mt=d.getMonth()+1;
    var datetime=d.getFullYear()+'-'+mt+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    var post ={
        title:req.body.title,
        content:req.body.content,
        updated_at: datetime
    };
    var sql=db.update('posts', 'id', req.params.id);
    conn().query(sql, post, (error, results)=>{
        if(error) throw error;
        res.redirect('/');
    });
    // console.log(req.body.title);
    
});
route.post('/', function(req, res){
    var d=new Date();
    var mt=d.getMonth()+1;
    var datetime=d.getFullYear()+'-'+mt+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    var post = {
        title:req.body.title,
        content:req.body.content,
        created_at:datetime,
        updated_at:datetime
    };
    var sql=db.insert('posts');
    conn().query(sql, post, (error, results)=>{
        if(error) throw error;
        res.redirect('/');
    });
});