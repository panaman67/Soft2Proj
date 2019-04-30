<?php
	ini_set('display_errors', 1);
	require_once('C:\MAMP\htdocs\unirest-php\src\Unirest.php');

	$ing1 = $_GET["Ingredient1"];
	$ing2 = $_GET["Ingredient2"];
	$ing3 = $_GET["Ingredient3"];
	
	Unirest\Request::verifyPeer(false);
	
	$queryLink = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=" . $ing1;
	
	if(!("" === $ing2)){
		
		$queryLink = $queryLink . "%2C" . $ing2;
	
	}
	if(!("" === $ing3)){
		
		$queryLink = $queryLink . "%2C" . $ing3;
		
	}
	
	$response = Unirest\Request::get($queryLink,
	  array(
		"X-RapidAPI-Host" => "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
		"X-RapidAPI-Key" => "634fc51facmshe7b5d0948d9641dp14d22ejsn0d2d49745e9c"
	  )
	);
	
	$resultArray = $response->body;
?>
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
	
		<?php
		
			foreach($resultArray as $rslt){
				
				$fullArticleLink = "https://spoonacular.com/recipes/";
				$splitString = explode(" ", $rslt->title);
				foreach($splitString as $str){
					
					$fullArticleLink = $fullArticleLink . $str . "-";
				
				}
				
				
				$fullArticleLink = $fullArticleLink . $rslt->id;
				
				echo '<div class="w3-card-4 w3-margin w3-white" align="left">
						<img src="' . $rslt->image .'" alt="' . $rslt->title . '" style="width:100%" >
						<div class="w3-container">
							<h3><b>' . $rslt->title . '</b></h3>
						</div>
						<div class="w3-container">
							<p>' . $rslt->title . '</p>
							<div class="w3-row">
								<div class="w3-col m8 s12">
									<form action="'. $fullArticleLink .'">
										<p><button type="submit" class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
									</form>
								</div>
							</div>
						</div>
					</div>

					<hr>';
			}
		?>
	
	</div>
	
</body>
</html>