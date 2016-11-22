// object containing the data

var employees = {
	id : [],
	name : [],
	surname : [],
	level : [],
	salary : []
};

/**
 * Determines if an employee with a determined id is present
 *
 * @param      {number}      id      The identifier
 * @return     {boolean}  True if present, False otherwise.
 */
var isPresent = function(id) {
	return employees.id.indexOf(id) != -1 ? true : false;
}

/**
 * Given a certain present id, the data about the employee with that id are updated
 * the id passed is ALWAYS present (the check is made by another method, that is the caller of this one)
 *
 * @param      {number}  id       The identifier
 * @param      {string}  name     The name
 * @param      {string}  surname  The surname
 * @param      {number}  level    The level
 * @param      {number}  salary   The salary
 */
function updateEmployee(id,name,surname,level,salary){
	var index = employee.id.indexOf(id);
	employees.name[index] = name;
	employees.surname[index] = surname;
	employees.level[index] = level;
	employees.salary[index] = salary;
}

/**
 * Inserts a new employee with his relative datas
 *
 * @param      {number}     id       The identifier
 * @param      {string}  name     The name
 * @param      {string}  surname  The surname
 * @param      {number}     level    The level
 * @param      {number}     salary   The salary
 */
function insertEmployee(id,name,surname,level,salary){
	employees.id.push(id);
	employees.name.push(name);
	employees.surname.push(surname);
	employees.level.push(level);
	employees.salary.push(level);
}

/**
 * Gets the new id.
 *
 * @return     {number}  The new id.
 */
var getNewID = function getNewID(){
	var max = -1;
	for(var i=0;i<employees.id.length;i++){
		if(employees.id[i] > max){
			max = employees.id[i];
		}
	}
	return max+1;
}

/**
 * Determines if the input is an integer
 *
 * @param      			  x    the value to be processed
 * @return     {boolean}  True if x is a valid int, False otherwise.
 */
function isInt(x){
	return !isNaN(parseInt(x));
}

/**
 * Determines if the input is a positive int.
 *
 * @param      			  x    the value to be processed
 * @return     {boolean}  True if x is a positive int, False otherwise.
 */
var isValidID = function(x){
	return isInt(x) && parseInt(x)>0;
}

function getIndexFromID(id){
	return employees.id.indexOf(id);
}

/**
 * Given an id, its returned an object containing the data related to the employee
 *
 * @param      {number}  id      The identifier
 * @return     {Object}  The employee.
 */
var getEmployee = function(id){
	var i = getIndexFromID(id);
	var emp =
	{
		id : employees.id[i],
		name: employees.name[i],			
		surname : employees.surname[i],
		level : employees.level[i],
		salary : employees.salary[i]
	};
	return emp;
}

var removeEmployee = function(id){
	var index = employees.id.indexOf(id);
	if(index != -1){
		employees.id.splice(index,1);
		employees.name.splice(index,1);
		employees.surname.splice(index,1);
		employees.level.splice(index,1);
		employees.salary.splice(index,1);
	}
}

var addEmployee = function addEmployee(id,name,surname,level,salary){
	insertEmployee(id,name,surname,level,salary);
};

exports.getNewID = getNewID;
exports.addEmployee = addEmployee;
exports.removeEmployee = removeEmployee;
exports.getEmployee = getEmployee;
exports.isValidID = isValidID;
exports.isPresent = isPresent;