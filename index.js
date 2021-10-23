var express = require('express');
var app = express();
var fs = require('fs');
require('dotenv').config();
var port = process.env.PORT;
app.get('/', function (req, res) {
    fs.readFile('index.html', function (e, html) {
        if (e) {
            console.log(e);
            return;
        }
        res.send(html);
    });
});
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
