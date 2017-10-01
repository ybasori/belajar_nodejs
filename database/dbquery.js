

module.exports.insert=function(table){
    return 'INSERT INTO '+table+' SET ?';
};
module.exports.get=function(table, orderby, limit=null, offset=null){
    if(limit==null){
        return 'SELECT * FROM '+table+' ORDER BY '+orderby;
    }
    else{
        return 'SELECT * FROM '+table+' ORDER BY '+orderby+' LIMIT '+limit+' OFFSET '+offset;
    }
};
module.exports.delete=function(table, key, value){
    return 'DELETE FROM '+table+' WHERE '+key+`= '`+value+`'`;
    // console.log(where.id);
}
module.exports.update=function(table, key, value){
    return 'UPDATE '+table+' SET ? WHERE '+key+`='`+value+`'`;
};