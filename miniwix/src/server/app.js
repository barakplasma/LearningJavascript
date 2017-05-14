const fs = require('fs');
const express = require('express');
const router = express.Router();
const app = express();
const pug = require('pug');

app.set('view engine','pug');

var someSite = {
    title: "Hello World",
    content: "<p>Some text</p><p>Some text</p>"
};

app.get('/api/site', function (req, res) {
    res.send(someSite);
});

app.put('/api/site', function (req, res) {
    // fs.writeFile(`../../data/site.json`, req.body, function (err) {
    //     if (err) {
    //         res.status(500).send({"error":err});
    //     } else {
    //         res.status(200).send({"status":200,"added":req.body});
    //     }
    // });
    res.status(200).send({"status":200,"added":req.body});
});

app.get('/editor', function (req, res) {
    res.render('editor',someSite);
});

app.get('/site', function (req, res) {
    res.render('site',someSite);
});

module.exports = app;