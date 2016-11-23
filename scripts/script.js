function toggleForm(){
	var form = document.getElementById("input-form");
	form.style.display = form.style.display == "none"?"block":"none";
}

function searchEmp(){
	var id = document.getElementById('id');
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var level = document.getElementById('level');
	var salary = document.getElementById('salary');
	var param = document.getElementById('idsearch');
	var form = document.getElementById('input-form');
	var xhr = new XMLHttpRequest();
	xhr.open('post','http://localhost:32123/search',true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+param.value);
	xhr.onloadend = function(){
		var result = JSON.parse(xhr.responseText);
		if (result != null){
			form.style.display = 'block';
			id.value = result['id'];
			name.value = result['name'];
			surname.value = result['surname'];
			level.value = result['level'];
			salary.value = result['salary'];
		}else{
			form.style.display = 'none';
			id.value = '';
			name.value = '';
			surname.value = '';
			level.value = '';
			salary.value = '';
		}
	}
}

function deleteEmp(){
	var id = document.getElementById('id');
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var level = document.getElementById('level');
	var salary = document.getElementById('salary');
	var form = document.getElementById('input-form');
	var param = document.getElementById('idsearch');

	var xhr = new XMLHttpRequest();
	xhr.open('post','http://localhost:32123/delete',true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+param.value);
	xhr.onloadend = function(){
		form.style.display = 'none';

		id.value = '';
		name.value = '';
		surname.value = '';
		level.value = '';
		salary.value = '';
	}	
}

function insertEmp(){
	var id = document.getElementById('id');
	var name = document.getElementById('name');
	var surname = document.getElementById('surname');
	var level = document.getElementById('level');
	var salary = document.getElementById('salary');
	
	var form = document.getElementById('input-form');
	var xhr = new XMLHttpRequest();
	xhr.open('post','http://localhost:32123/insert',true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.send('id='+id.value+'&name='+name.value+'&surname='+surname.value+'&level='+level.value+'&salary='+salary.value);
	xhr.onloadend = function(){
		form.style.display = 'none';
		id.value = '';
		name.value = '';
		surname.value = '';
		level.value = '';
		salary.value = '';
	}	
}