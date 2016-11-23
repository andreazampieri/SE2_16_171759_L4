/**
 * toggles the visibility of the form to insert/update the employees
 */
function toggleForm(){
	var form = document.getElementById("input-form");
	form.style.display = form.style.display == "none"?"block":"none";
}

/**
 * method called by the button 'Seach'
 */
function searchEmp(){
	//gets the input fields objects
	var id = document.getElementById('id');
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var level = document.getElementById('level');
	var salary = document.getElementById('salary');

	var param = document.getElementById('idsearch');	//id-value searched
	var form = document.getElementById('input-form');
	//new async request
	var xhr = new XMLHttpRequest();
	xhr.open('post','http://localhost:32123/search',true);
	//setting the type of the request
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+param.value);
	//when the data is gathered
	xhr.onloadend = function(){
		var result = JSON.parse(xhr.responseText);
		//if the data is not NULL, it means that there were an employee with the searched id
		if (result != null){
			//displays the data in the form
			form.style.display = 'block';
			id.value = result['id'];
			name.value = result['name'];
			surname.value = result['surname'];
			level.value = result['level'];
			salary.value = result['salary'];
		}else{
			//reset and hide the form
			form.style.display = 'none';
			id.value = '';
			name.value = '';
			surname.value = '';
			level.value = '';
			salary.value = '';
		}
	}
}

/**
 * method called by the button 'Delete'
 */
function deleteEmp(){
	//gets the input fields objects
	var id = document.getElementById('id');
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var level = document.getElementById('level');
	var salary = document.getElementById('salary');

	var form = document.getElementById('input-form');
	var param = document.getElementById('idsearch');	//id-value searched
	//new async request
	var xhr = new XMLHttpRequest();
	xhr.open('post','http://localhost:32123/delete',true);
	//setting the type of the request
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+param.value);
	//when the request has been done
	xhr.onloadend = function(){
		//reset and hide the input-form
		form.style.display = 'none';

		id.value = '';
		name.value = '';
		surname.value = '';
		level.value = '';
		salary.value = '';
	}	
}

/**
 * method called by the 'Insert' button
 */
function insertEmp(){
	//fields of the form
	var id = document.getElementById('id');
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var level = document.getElementById('level');
	var salary = document.getElementById('salary');
	var form = document.getElementById('input-form');
	//new async request
	var xhr = new XMLHttpRequest();
	xhr.open('post','http://localhost:32123/insert',true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+id.value+'&name='+name.value+'&surname='+surname.value+'&level='+level.value+'&salary='+salary.value);
	//reset the form on the end of the insertion
	xhr.onloadend = function(){
		form.style.display = 'none';
		id.value = '';
		name.value = '';
		surname.value = '';
		level.value = '';
		salary.value = '';
	}	
}