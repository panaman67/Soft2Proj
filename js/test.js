function acceptInput() {

	var ingredient1 = document.getElementById("i1").value;
	var ingredient2 = document.getElementById("i2").value;
	var ingredient3 = document.getElementById("i3").value;

	var getStatement = formatAPIGet(ingredient1, ingredient2, ingredient3);

	document.getElementById("results").innerHTML = "<p>" + getStatement + "</p>";

	callAPI(getStatement);

}

function callAPI(stmnt){

	const request = require('request');

	var options = { 
		method: 'GET',
		url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%2Cflour%2Csugar",
		headers: { 
			'cache-control': 'no-cache',
			'Content-Type': 'application/json',
			'X-RapidAPI-Key': "634fc51facmshe7b5d0948d9641dp14d22ejsn0d2d49745e9c",
			'header1': 'header-value-1'
		},
		qs: { 
			parameter1: 'parameter-value-1' 
		}
	};

	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		document.getElementById("results").innerHTML = "<p>" + body + "</p>";
	});

}

function formatResults(rslt){

	for(var i = 0; i<result.body.length; i++){
		
		var div = document.getElementById("results");
		div.innerHTML = "<p>" + result.body[i].title + "</p>";
		var foodImgSrc = result.body[i].image;
		var foodID = result.body[i].id;
		var title = result.body[i].title;

		var articleLink = createRecipeLink(foodID, title);

	}

}

function createRecipeLink(id, title){

	var splitString = title.split(" ");
	var link = "";
	for(var i = 0; i<splitString.length; i++){
		link += splitString[i] + "-";
	}

	link += id;

	var div = document.getElementById("results");
	div.innerHTML = "<p>" + link + "</p>";

}

function formatAPIGet(ing1, ing2, ing3){

	var getStatement = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=2&ranking=1&ignorePantry=false&ingredients=";

	if(ing1){
		getStatement += ing1;
		if(ing2){
			getStatement += "%2C" + ing2;
		}
		if(ing3){
			getStatement += "%2C" + ing3;
		}
	}

	return getStatement;
}

function displayResults() {
	
	const outerDiv = document.createElement("div");
	const image = document.createElement("img");
	const innerDiv1 = document.createElement("div");
	const rxTitle = document.createElement("h3");
	const innerDiv2 = document.createElement("div");
	const missingIngredients = document.createElement("p");
	const innerInnerDiv = document.createElement("div");
	const innerInnerInnerDiv = document.createElement("div");
	const redirectButton = document.createElement("p");
	
	//working from inside to out
	rxTitle.innerHTML = "<b>Recipe</b>";
	redirectButton.innerHTML = "<button type= 'submit' class='w3-button w3-padding-large w3-white w3-border'><b>READ MORE »</b></button>";
	innerInnerInnerDiv.className = "w3-col m8 s12";
	innerInnerDiv.className = "w3-row";
	missingIngredients.innerHTML = "Missing recipe";
	innerDiv2.className = "w3-container";
	innerDiv1.className = "w3-container";

	image.src = "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/6/28/0/FNK_Apple-Pie_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382545039107.jpeg";

	outerDiv.className = "w3-card-4 w3-margin w3-white";
	outerDiv.align = "left";
	outerDiv.style = "width: 100%";

	const div = document.getElementById("results");

	innerInnerInnerDiv.appendChild(redirectButton);
	innerInnerDiv.appendChild(innerInnerInnerDiv);
	innerDiv2.appendChild(missingIngredients);
	innerDiv2.appendChild(innerInnerDiv);

	innerDiv1.appendChild(rxTitle);

	outerDiv.appendChild(image);
	outerDiv.appendChild(innerDiv1);
	outerDiv.appendChild(innerDiv2);

	div.appendChild(outerDiv);

	div.style = "float: left";


}
