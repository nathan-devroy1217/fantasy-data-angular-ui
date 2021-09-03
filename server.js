var express = require('express');
var app = express();
app.use(express.static('dist/angular-tour-of-heroes'));
app.all('/', function (req, res,next) {
    res.redirect('/');
});
app.listen(8080)
