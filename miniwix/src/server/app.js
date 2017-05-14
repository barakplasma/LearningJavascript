const express = require('express');
const router = express.Router();
const app = express();

app.get('/api/site', function(req, res){
    res.send('JSON');
});

app.put('/api/site', function(req, res){
    res.send('JSON');
});

module.exports = app; 