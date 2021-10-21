var http = require('http');
var fs = require('fs');
require('dotenv').config();
var port = process.env.PORT;
function getFilePath(reqURL) {
    var filePath;
    switch (reqURL) {
        case '/':
            filePath = 'index.html';
            break;
        case '/about':
            filePath = 'about.html';
            break;
        case '/contact':
            filePath = 'contact.html';
            break;
        default:
            filePath = '404.html';
    }
    return filePath;
}
var server = http.createServer(function (req, res) {
    var filePath = getFilePath(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(filePath, function (e, html) {
        if (e) {
            console.log(e);
            return;
        }
        res.write(html);
    });
    res.end();
});
server.listen(port, function () {
    console.log("Server running at port " + port + "...");
});
