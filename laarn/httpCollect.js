var http = require('http')
var bla = require('bl')

var args = process.argv;

http.get(args[2],function httpResp(response){
    response.pipe(bla(function (err, data) {
        //The first line you write should just be an integer representing the number of characters received from the server.
        console.log(data.toString().length);
        //The second line should contain the complete String of characters sent by the server.
         console.log(data.toString());
    }))
})