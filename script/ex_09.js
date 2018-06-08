window.onload = function () {
	cadre = document.body.children[0].children[0].children[2].children[0];
	canvas = document.body.children[0].children[0].children[2].children[0].children[0];
	cadre.setAttribute("draggable", true);
	canvas.setAttribute("draggable", true);
	canvas.innerHTML = "coucou";
	canvas.addEventListener("dragstart", function (event) {
		event.dataTransfer.effectAllowed = "move";
	});
	cadre.addEventListener("ondragover", function (event) {
		event.preventDefault();
	});
};