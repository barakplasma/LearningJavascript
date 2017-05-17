const fs = require('fs');
const express = require('express');
const router = express.Router();
const app = express();
const pug = require('pug');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine','pug');

var someSite = {
    title: "Hello World",
    content: "<p>Some text</p><p>Some text</p>"
};

app.get('/api/site', function (req, res) {
    res.json(someSite);
});

app.put('/api/site', function (req, res) {
    //console.log(req.body);
    fs.writeFile(`./data/site.json`, JSON.stringify(req.body), function (err) {
        if (err) {
            res.status(500).json({"error":err});
        } else {
            res.status(200).json({"status":200,"added":req.body});
        }
    });
});

app.get('/editor', function (req, res) {
    res.render('editor',someSite);
});

app.get('/site', function (req, res) {
    fs.readFile('./data/site.json', 'utf8', (err,site)=>{
        if(err) throw err;
        res.render('site',JSON.parse(site));
    });
});

app.listen(7654);

module.exports = app;