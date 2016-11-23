<!DOCTYPE html>
<html>
<head>
	<title>Employees</title>
	<meta charset="utf-8" />
	<script src="scripts/script.js"></script>
</head>
<body>
	<h2>Employee manager</h2>
	<section>
		<input type="number" id="idsearch">
		<button onclick="searchEmp()">Search</button>
		<button onclick="deleteEmp()">Delete</button>
	</section>
	<button onclick="toggleForm();">Show/Hide Insert Form</button>
	<section id="input-form" style="display: (: display ~ none :)">
		ID: <input type="number" id="id" name="id" value="(:id:)"><br>
		Name: <input type="text" id="name" name="name" value="(:name:)" required><br>
		Surname: <input type="text" id="surname" name="surname" value="(:surname:)" required><br>
		Level: <input type="number" id="level" name="level" value="(:level:)" required><br>
		Salary: <input type="number" id="salary" name="salary" value="(:salary:)" required><br>
		<button onclick="insertEmp()">Insert</button>
	</section>
</body>
</html>