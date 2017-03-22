var express = require('express')
var file = process.argv[3];

var app = express()
app.set('views', file || path.join(__dirname,'templates'))
app.set('view engine', 'pug')

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2])