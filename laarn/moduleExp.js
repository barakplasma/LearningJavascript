var fs = require('fs');
var pa = require('path');

module.exports = function (dir,fileExt,callback){
    readDir(fs.readFile(dir),fileExt);

    function readDir(list,fileExt){
        var out = list.filter((file)=>pa.extname(file)==fileExt);
    }
    callback(null,out);
}