<!DOCTYPE html>
<html>
<head>
	<title>Employees</title>
	<meta charset="utf-8" />
	<script src="scripts/script.js"></script>
</head>
<body>
	<section>
		<input type="number" id="idsearch">
		<button onclick="searchEmp()">Search</button>
		<button onclick="deleteEmp()">Delete</button>
	</section>
	<button onclick="toggleForm();">Show/Hide Insert Form</button>
	<section id="input-form" style="display: (: display ~ none :)">
		<form action="http://localhost:32123/insert" method="post">
			ID: <input type="number" id="id" name="id" value="(:id:)"><br>
			Name: <input type="text" id="name" name="name" value="(:name:)"><br>
			Surname: <input type="text" id="surname" name="surname" value="(:surname:)"><br>
			Level: <input type="number" id="level" name="level" value="(:level:)"><br>
			Salary: <input type="number" id="salary" name="salary" value="(:salary:)"><br>
			<input type="submit" value="Insert">
		</form>
		(: test :)
	</section>
</body>
</html>