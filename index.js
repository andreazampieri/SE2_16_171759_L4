// Libs

var http = require('http');
var express = require('express');

// initialization server side
var app = express();
var port = 32123;

app.set('port',(process.env.PORT || port));
app.listen('localhost',port);

// actions to be done on a request on the root path
app.use('/',function() {
	// TODO
});

