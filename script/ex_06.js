window.onload = function () {
	var cadre = document.body.children[0].children[0].children[2].children[0];
	var str = "";
	class Hero {
		constructor (nom, classe, intel, force) {
			this.nom = nom.charAt(0).toUpperCase() + nom.slice(1);
			this.classe = classe;
			this.intel = intel;
			this.force = force;
		}
		toString () {
			str = "Je suis " + this.nom + " le " + this.classe + ", j'ai " + this.intel
				+ " points d'intelligence et " + this.force + " points de force!<br>";
			cadre.innerHTML += str;
		}
	}
}