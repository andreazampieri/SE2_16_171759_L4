// Libs

var http = require('http');
var express = require('express');

// initialization server side
var app = express();
var address = '127.0.0.1';
var port = 32123;

app.set('port',(process.env.PORT || port));
app.listen(address,port);

// actions to be done on a request on the root path
app.use('/',function(request,response) {
	// TODO
});

console.log("Running on ",address,":",port,"\nhttp://",address,":",port);
