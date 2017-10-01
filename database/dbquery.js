const conn = require('../database/connection');
var insert=function(table, data){
    var sql='INSERT INTO '+table+' SET ?';
    var query=conn().query(sql, data);
};

module.exports.insert=insert;