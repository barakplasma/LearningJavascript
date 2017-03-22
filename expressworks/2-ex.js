var express = require('express')
var file = process.argv[3];

var app = express()
app.use(express.static(file))
app.listen(process.argv[2])