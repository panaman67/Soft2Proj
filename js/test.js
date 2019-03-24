var row = document.createElement("tr");
var data = document.createElement("td");
var node = document.createTextNode("Test Node");

row.appendChild(node);

function test() {
	var ele = document.getElementById("results").childNodes[3];

	// console.log(ele);

	ele.appendChild(row);
}