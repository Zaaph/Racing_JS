window.onload = function () {
	var cadre = document.body.children[0].children[0].children[2].children[0];
	var i = 16;
	var plus = document.body.children[0].children[0].children[2].children[0].children[0];
	var minus = document.body.children[0].children[0].children[2].children[0].children[1];
	background = document.body.children[0].children[0].children[2].children[0].children[2];
	plus.addEventListener("click", function () {
		i++;
		document.body.style.fontSize = i + "px";
	});
	minus.addEventListener("click", function () {
		i--;
		document.body.style.fontSize = i + "px";
	});
	background.addEventListener("click", function () {
		var color = background.options[background.selectedIndex].value;
		document.body.style.backgroundColor = color;
	});
}