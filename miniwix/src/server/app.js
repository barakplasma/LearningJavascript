const fs = require('fs');
const express = require('express');
const router = express.Router();
const app = express();

var someSite = {
    title: "Hello World",
    content: "<p>Some text</p><p>Some text</p>"
};

app.get('/api/site', function (req, res) {
    res.send(someSite);
});

app.put('/api/site', function (req, res) {
    fs.writeFile(`${req}`, req.body, function (err) {
        if (err) {
            res.status(500).send();
        } else {
            res.status(200).send();
        }
    });
});

app.get('/editor', function (req, res) {
    res.render('editSite');
});

app.listen(3000);

module.exports = app;