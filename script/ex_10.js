window.onload = function () {
	var result = document.body.children[0].children[0].children[2].children[0].children[0];
	var erase = document.body.children[0].children[0].children[2].children[0].children[1].children[0];
	var reset = document.body.children[0].children[0].children[2].children[0].children[1].children[1];
	var modulo = document.body.children[0].children[0].children[2].children[0].children[1].children[2];
	var divide = document.body.children[0].children[0].children[2].children[0].children[1].children[3];
	var sept = document.body.children[0].children[0].children[2].children[0].children[1].children[4];
	var huit = document.body.children[0].children[0].children[2].children[0].children[1].children[5];
	var neuf = document.body.children[0].children[0].children[2].children[0].children[1].children[6];
	var multiply = document.body.children[0].children[0].children[2].children[0].children[1].children[7];
	var quatre = document.body.children[0].children[0].children[2].children[0].children[1].children[8];
	var cinq = document.body.children[0].children[0].children[2].children[0].children[1].children[9];
	var six = document.body.children[0].children[0].children[2].children[0].children[1].children[10];
	var minus = document.body.children[0].children[0].children[2].children[0].children[1].children[11];
	var un = document.body.children[0].children[0].children[2].children[0].children[1].children[12];
	var deux = document.body.children[0].children[0].children[2].children[0].children[1].children[13];
	var trois = document.body.children[0].children[0].children[2].children[0].children[1].children[14];
	var plus = document.body.children[0].children[0].children[2].children[0].children[1].children[15];
	var zero = document.body.children[0].children[0].children[2].children[0].children[1].children[16];
	var comma = document.body.children[0].children[0].children[2].children[0].children[1].children[17];
	var equal = document.body.children[0].children[0].children[2].children[0].children[1].children[18];

	var calcul = 0;
	var clicked_plus = 0;
	var clicked_minus = 0;
	var clicked_divide = 0;
	var clicked_multiply = 0;
	var clicked_modulo = 0;
	var display = "";
	var current_nbr = "";
	un.addEventListener("click", function () {
		display += "1";
		current_nbr += "1"
		result.innerHTML = display;
	});
	deux.addEventListener("click", function () {
		display += "2";
		current_nbr += "2"
		result.innerHTML = display;
	});
	trois.addEventListener("click", function () {
		display += "3";
		current_nbr += "3"
		result.innerHTML = display;
	});
	quatre.addEventListener("click", function () {
		display += "4";
		current_nbr += "4"
		result.innerHTML = display;
	});
	cinq.addEventListener("click", function () {
		display += "5";
		current_nbr += "5"
		result.innerHTML = display;
	});
	six.addEventListener("click", function () {
		display += "6";
		current_nbr += "6"
		result.innerHTML = display;
	});
	sept.addEventListener("click", function () {
		display += "7";
		current_nbr += "7"
		result.innerHTML = display;
	});
	huit.addEventListener("click", function () {
		display += "8";
		current_nbr += "8"
		result.innerHTML = display;
	});
	neuf.addEventListener("click", function () {
		display += "9";
		current_nbr += "9"
		result.innerHTML = display;
	});
	plus.addEventListener("click", function () {
		display += " + ";
		calcul += parseInt(current_nbr);
		current_nbr = "";
		result.innerHTML = display;
	});
}