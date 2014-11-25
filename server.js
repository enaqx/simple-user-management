/* Simple static web-server */

"use strict";

var express = require('express');
var app = express();
var port = 8000;

app.use('/', express.static(__dirname));;

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Run server at http://%s:%s', host, port);

});
