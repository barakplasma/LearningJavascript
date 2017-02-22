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
            res.write(handleRequest(path.query,parsetime))
            res.end()
            break;

        case '/api/unixtime':
            res.write(handleRequest(path.query,unixtime))
            res.end()
            break;

        default:
            console.error('malformed request: ',path.pathname)
            break;
    }
})
server.listen(port) //Your server should listen on the port provided by the first argument to your program.

function handleRequest(time,nextFunction) {
    //console.log(time,nextFunction)
    //Expect the request to contain
    //a key 'iso'
    console.assert(Object.keys(time).includes('iso'),'input does not have ISO parameter')
    //and an ISO-format time
    console.assert(/^\d{4}/.test(time.iso.substr(0,4)),'ISO year not first')
    
    //parse request
    /* 
    For example:
    /api/parsetime?iso=2013-08-10T12:10:15.474Z
    */
    time = new Date(time.iso);
    console.assert(/^\d*/.test(time.getTime()),'not unix time')
    //run child function and callback
    return nextFunction(time)
}

function parsetime(time) {
    //console.log(`parsetime: ${time}`)
    //serve JSON data like so:
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
    let json = {
        "hour":time.getHours(),
        "minute":time.getMinutes(),
        "second":time.getSeconds()
    }
    json = JSON.stringify(json)
    console.assert
    return json;
}

function unixtime(time) {
    //console.log(`unixtime: ${time}`)
    //Add second endpoint for the path '/api/unixtime'
    //accepts the same query string as parsetime

    //returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
    let json = JSON.stringify({"unixtime":time.getTime()})
    console.assert(Object.keys(JSON.parse(json)).includes('unixtime'),'converted to JSON incorrectly')// example { "unixtime": 1376136615474 }
    return json;
}