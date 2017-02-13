var exp = require('./moduleExp.js');
var fs = require('fs');
//console.log(process.argv[2]);
var path = process.argv[2];
var fileExt = process.argv[3];
console.log('path: ',path);

fs.readdir(path,(err,dir)=>{
    //console.log('dir:', dir);
    exp(path,fileExt,pushToConsole);
});
function pushToConsole(out){
    console.log(out);
}