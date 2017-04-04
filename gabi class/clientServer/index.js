var http = require('http');
var fs = require('fs');

var port = 3000;

var server = http.createServer(function(req,res){
    fs.readFile('.'+req.url,(err,html)=>{
        if(err) console.log('ERR: ',err)
        console.log(`sent ${'.'+req.url} at: ${Date.now()}`)
        res.end(html)
    });
})
console.log('started server')
server.listen(port);