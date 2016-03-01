var env = process.env.NODE_ENV || 'prod';
var settings = require('./config/settings.' + env + '.json');
var express = require('express');
var app = express();

app.use(express.static('public'));

var server = app.listen(settings.port, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Native ui app listening at http://%s:%s', host, port);
});
