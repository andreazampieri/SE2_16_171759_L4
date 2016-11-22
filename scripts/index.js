// Libs
var express = require('express');
var bind = require('bind');
var employees = require('./employees.js');
var bodyParser =  require('body-parser');


// initialization server side
var app = express();
var address = 'localhost';
var port = 32123;

app.set('port',(process.env.PORT || port));
app.listen(port,address);

app.use(bodyParser.urlencoded({ extended: false }));

console.log('Server started on',address,':',port);

//serve scripts
app.use('/scripts', express.static('scripts'));

app.use('/insert',function(request,response){
	var id = request.body.id != '' ? parseInt(request.body.id) : employees.getNewID();
	var name = request.body.name != '' ? request.body.name : 'undefined';
	var surname = request.body.surname != '' ? request.body.surname : 'undefined';
	var level = request.body.level != '' ? parseInt(request.body.level) : 'undefined';
	var salary = request.body.salary != '' ? parseInt(request.body.salary) : 0;

	employees.addEmployee(id,name,surname,salary);
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

// actions to be done on a request on the root path
app.use('/',function(request,response) {
	bind.toFile('templates/index.tpl',
		{},
		function(data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		});
});
