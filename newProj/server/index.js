var express = require('express')
var fs = require('fs')

console.log('let\s begin!')

var app = express()

app.use(express.static('client'));

app.get('/404',(request, response)=>{
    response.status(404).send('Not Found')
})

app.listen(8080)
console.log('Running on port 8080')