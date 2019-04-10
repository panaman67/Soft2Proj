function test() {

	for(var i = 0; i < 2; i++){
		insertResults();
	}

}

function insertResults() {
	
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
