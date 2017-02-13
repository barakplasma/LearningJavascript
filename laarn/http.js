var http = require('http');
var args = process.argv;

http.get(args[2],function httpResp(response){
    response.on('data', function(data){
        console.log(data.toString());
    })
})