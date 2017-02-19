//requirements
var http = require('http')
var fs = require('fs')
//set up vars
var args = process.argv
var port = args[2]

//create server
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    //req.pipe(res)
    req.on('data',(x)=>res.write(x.toString().toUpperCase()))
})
//Your server should listen on the port provided by the first argument to your program.
server.listen(port)