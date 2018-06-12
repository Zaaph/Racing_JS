/*jslint browser:true*/
window.onload = function () {
    /*"use strict";*/
    var cadre = document.body.children[0].children[0].children[2].children[0];
    cadre.addEventListener("click", function prompter() {
        var nom = "";
        var check = false;
        var str = "Etes vous sûr que";
        while (nom === "") {
            nom = window.prompt("Quel est votre nom?");
            if (nom !== "" && nom !== null) {
                check = window.confirm(str + nom + " est votre nom?");
            }
            if (check === true) {
                window.alert("Bonjour " + nom + " !");
                cadre.innerHTML = "Bonjour " + nom + " !";
            }
            if (check === false) {
                nom = "";
            }
        }
    });
};