var fs = require('fs');
var pa = require('path');

module.exports = function (dir,fileExt,callback){
    var list = fs.readFile(dir);
    
    var out //= fs.readFile(dir);
    //function readDir(list,fileExt){}
    out = list.filter((file)=>pa.extname(file)==fileExt);
    
    callback(null,out);
}