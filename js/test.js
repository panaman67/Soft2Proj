
function test() {
	var row = document.createElement("tr");
	var data = document.createElement("td");
	var node = document.createTextNode("Test Node");
	row.appendChild(node);
	var ele = document.getElementById("testing");

	ele.appendChild(row);
}
