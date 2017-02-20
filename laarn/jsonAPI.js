//requirements
var http = require('http')
var url = require('url')

var port = process.argv[2]

//Write an HTTP server
var server = http.createServer(function (request, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    var path = url.parse(request.url, true) //will parse content of request.url and provide you with an object with helpful properties.
    //console.log(path.query) //{ iso: '2017-02-20T14:44:10.542Z' }
    //console.log(path.pathname) // '/api/parsetime'
    switch (path.pathname) {
        case '/api/parsetime':

            break;

        case '/api/unixtime':

            break;

        default:
            console.error('malformed request')
            break;
    }
})
server.listen(port) //Your server should listen on the port provided by the first argument to your program.

function checkRequest() {
    //if request type get

    //parse request

    //Expect the request to contain
    //a key 'iso'
    console.assert
    //and an ISO-format time
    console.assert

    /* 
    For example:
    /api/parsetime?iso=2013-08-10T12:10:15.474Z
    */
    console.assert
}

function parsetime() {
    //when server receives a GET request to the path '/api/parsetime'

    //then serve JSON data like so:

    //The JSON response should contain these properties
    //'hour'
    //'minute'
    //'second'
    /*
         {
           "hour": 14,
           "minute": 23,
           "second": 15
         }
    */
    JSON.stringify()
    console.assert
}

function unixtime() {
    //Add second endpoint for the path '/api/unixtime'
    //accepts the same query string as parsetime

    //returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
    console.assert // example { "unixtime": 1376136615474 }
}