// Libs
var express = require('express');
var bind = require('bind');


// initialization server side
var app = express();
var address = 'localhost';
var port = 32123;

app.set('port',(process.env.PORT || port));
app.listen(port,address);

console.log('Server started on',address,':',port);

//serve scripts
app.use(express.static('/scripts'));

// actions to be done on a request on the root path
app.use('/',function(request,response) {
	bind.toFile('templates/index.tpl',
		{},
		function(data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		});
});

app.use('/search',function(request,response){

});

app.use('/delete',function(request,response){

});

app.use('/insert',function(request,response){

});