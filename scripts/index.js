// Libs
var express = require('express');
var path = require('path');
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
app.use('/',express.static('.'));

//set up default headers for async. requests
var headers = {};
headers["Access-Control-Allow-Origin"] = "*"; //for cross enviroment request
headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";//methods allowed to responce
headers["Access-Control-Allow-Credentials"] = false;
headers["Access-Control-Max-Age"] = '86400'; // 24 hours
headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"; //type of headers

// request for inserting new employees
app.use('/insert',function(request,response){
	response.writeHead(200,headers);
	// the value is either '' or a number: case empty -> take a valid new identifier ; otherwise take the id sent
	var id = request.body.id != '' ? parseInt(request.body.id) : employees.getNewID(); 
	// the fields below should never be undefined or empty(check done with 'required'-attr) -> the value is always present	
	var name = request.body.name != '' ? request.body.name : 'undefined';
	var surname = request.body.surname != '' ? request.body.surname : 'undefined';
	var level = request.body.level != '' ? parseInt(request.body.level) : 'undefined';
	var salary = request.body.salary != '' ? parseInt(request.body.salary) : 0;

	//call the module: it's the method that distuinguish between creating a new emp or updating an existing one
	employees.addEmployee(parseInt(id),name,surname,parseInt(level),parseInt(salary));

	response.end();
});

//request for searching an employee based on the id
app.use('/search',function(request,response){
	var head = headers;
   	// add the type of response to the headers
    head["Content-Type"] = "application/json";//format response
	response.writeHead(200, head);

	var id = request.body.id;
	// if the id is present into the data, the response is an object containing the values [converted in JSON]
	// {
	// 		id: <id>,
	// 		name: <name>
	// 		... and so on
	// }
	// otherwise sends a null JSON
	if(employees.isPresent(parseInt(id))){
		var emp = employees.getEmployee(parseInt(id));		
		response.end(JSON.stringify(emp));
	}else{
		response.end(JSON.stringify(null));
	}
});

// request of deletion of an employee based on the id
app.use('/delete',function(request,response){
	response.writeHead(200,headers);

	id = request.body.id;
	//if the id is present in the data, it gets deleted
	if(employees.isPresent(parseInt(id))){
		employees.removeEmployee(parseInt(id));
	}
	response.end();
});

// actions to be done on a request on the root path, in other words the index
app.use('/',function(request,response) {
	//sends the file to the client
	response.sendFile(path.join(__dirname + "/../index.html"));
});
