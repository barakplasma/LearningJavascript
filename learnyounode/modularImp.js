var exp = require('./moduleExp.js');

//console.log(process.argv[2]);
var loc = process.argv[2];
var fileExt = process.argv[3];
//console.log('path: ',path);

exp(loc,fileExt,pushToConsole);
function pushToConsole(err,out){
    out.map((out)=>console.log(out));
}