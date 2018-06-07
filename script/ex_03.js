window.onload = function () {
	var cadre = document.body.children[0].children[0].children[2].children[0];
	cadre.addEventListener("click", function prompter () {
		nom = "";
		while (nom === "") {
			nom = prompt("Quel est votre nom?");
			if (nom !== "" && nom != null) {
				check = confirm("Etes vous sûr que " + nom +" est votre nom?");
				if (check === true) {
					alert("Bonjour " + nom + " !");
					cadre.innerHTML = "Bonjour " + nom + " !";
				}
				if (check === false)
					nom = "";
			}
		}
	});
};