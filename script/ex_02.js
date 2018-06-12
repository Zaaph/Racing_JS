window.onload = function () {
    /*"use strict";*/
    var cadre = document.body.children[0].children[0].children[2].children[0];
    var i = 0;
    cadre.addEventListener("click", function () {
        i += 1;
        cadre.innerHTML = i;
    });
};