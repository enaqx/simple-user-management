var express = require('express');
var app = express();

app.use('/', express.static(__dirname));;

var server = app.listen(8000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Run server at http://%s:%s', host, port);

});
