<!DOCTYPE html>
<html>
<head>
	<title>Employees</title>
	<meta charset="utf-8" />
	<script src="scripts/script.js"></script>
</head>
<body>
	<section>
	<form>
		<input type="number" name="idsearch">
		<button onclick="searchEmp()">Search</button>
		<button onclick="deleteEmp()">Delete</button>
	</form>
	</section>
	<button onclick="toggleForm();">Show/Hide Insert Form</button>
	<section id="input-form" style="display: (: display ~ none :)">
		<form action="http://localhost:32123/insert" method="post">
			ID: <input type="number" name="id" value="(:id:)"><br>
			Name: <input type="text" name="name" value="(:name:)"><br>
			Surname: <input type="text" name="surname" value="(:surname:)"><br>
			Level: <input type="number" name="level" value="(:level:)"><br>
			Salary: <input type="number" name="salary" value="(:salary:)"><br>
			<input type="submit" value="Insert">
		</form>
	</section>
</body>
</html>