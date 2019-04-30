


<!DOCTYPE html>
<html>
<head>
	<title>Software Project</title>
	<meta name="description" content="A website for recipes"/>
	<meta charset="utf-8"/>
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
</head>

<body>
	<h1>Our Beautiful Website</h1>
	<form action="databaseaccess.php" method="get">
	
		Ingredient 1: <input type="text" name="Ingredient1"><br>
		Ingredient 2: <input type="text" name="Ingredient2"><br>
		Ingredient 3: <input type="text" name="Ingredient3"><br>
		<input type="submit" value="Look for recipes">
		
	</form>
	<div id = "results">
	</div>
	<script src="../js/test.js"></script>
</body>
</html>
