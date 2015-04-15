var express = require('express'),
    params = require('express-params'),
    multer  = require('multer');

// Express instance
var app = express();

// Middleware to check if user is authorised
// This would need replaced with something more serious
function check(req, res, next) {
    var user = req.params.user;
    var password = req.params.password;
    if(user === 'mark' && password === 'password') {
        next();
    } else {
        console.log('Not authorised');
        res.status(401).send('Not authorised');
    }
}

// Middleware to handle the file upload
var multerMiddleWare = multer({
    dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename;
    }
});

// Middleware to be called once the file is uploaded
function finish(req, res, next) {
    var log = req.files.file.originalname + ' was uploaded.';
    console.log(log);
    res.send(log);
}

// Post endpoint
app.post('/:user/:password', check, multerMiddleWare, finish);

// Start server
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('nodeFileUploader listening at http://%s:%s', host, port);
});