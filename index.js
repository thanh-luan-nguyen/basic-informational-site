var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
require('dotenv').config();
var port = process.env.PORT;
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});
app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/about.html'));
});
app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '/contact.html'));
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/404.html'));
});
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
