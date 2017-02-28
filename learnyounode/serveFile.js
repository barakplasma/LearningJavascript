//requirements
var http = require('http')
var fs = require('fs')
//set up vars
var args = process.argv
var port = args[2]
/* You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response. */
var file = fs.createReadStream(args[3])

//create server
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    file.pipe(res)
})
//Your server should listen on the port provided by the first argument to your program.
server.listen(port)