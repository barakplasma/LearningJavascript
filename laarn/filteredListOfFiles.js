var fs = require('fs');
var pa = require('path');

var args = process.argv;

function returnList(err,list){
    if(err) throw err;
    //console.log(list);
    let res = list.filter((file)=>pa.extname(file)=='.md');
    res.map((file)=>{console.log(file)});
}
fs.readdir(args[2],returnList);