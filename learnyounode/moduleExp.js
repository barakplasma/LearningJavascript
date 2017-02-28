var fs = require('fs');
var pa = require('path');

module.exports = function (dir,fileExt,callback){
    fs.readdir(dir,(err,data)=>{
        if (err) return callback(err)
        var out = data.filter((file)=>{return pa.extname(file)=='.'+fileExt});
        //console.log(`out: ${out}; fileExt: ${fileExt};`);
        callback(err,out);
    })
};