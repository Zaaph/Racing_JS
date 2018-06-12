/*jslint browser:true, this:true*/
window.onload = function () {
    /*"use strict";*/
    var cadre = document.body.children[0].children[0].children[2].children[0];
    var str = "";
    function Hero(nom, classe, intel, force) {
        this.nom = nom;
        nom = nom.charAt(0).toUpperCase() + nom.slice(1);
        this.classe = classe;
        this.intel = intel;
        this.force = force;
        this.toString = function toString() {
            str = "Je suis " + nom + " le " + classe + ", j'ai " + intel
                + " points d'intelligence et " + force
                + " points de force!<br>";
            cadre.innerHTML += str;
        };
    }
    var mage = new Hero("amagay", "mage", 21, 3);
    var guerrier = new Hero("amadouble", "guerrier", 3, 21);
    mage.toString();
    guerrier.toString();
};