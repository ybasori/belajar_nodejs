var mysql = require('mysql');
var conn = function(){
    var connection= mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'nodemysql'
    });
    return connection;
};

module.exports=conn;