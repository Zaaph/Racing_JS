window.onload = function () {
	var cadre = document.body.children[0].children[0].children[2].children[0];
	var i = 0;
	cadre.addEventListener("click", function () {i++; cadre.innerHTML = i;});
}