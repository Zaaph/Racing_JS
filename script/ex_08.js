window.onload = function () {
	var i = 0;
	while (i < 12) {
		var context = document.body.children[0].children[0].children[2].children[0].children[i].getContext('2d');
		if (i < 4)
			context.fillStyle = "orange";
		else if (i < 7 && i >= 4) 
			context.fillStyle = "purple";
		else if (i == 7)
			context.fillStyle = "black";
		else if (i > 7)
			context.fillStyle = "olive";
		context.fillRect(0, 0, 300, 150);
		i++;
	}
}