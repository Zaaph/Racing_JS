/*jslint browser:true*/
window.onload = function () {
    /*"use strict";*/
    var i = 16;
    var plus = document.body.children[0].children[0].children[2]
        .children[0].children[0];
    var minus = document.body.children[0].children[0].children[2]
        .children[0].children[1];
    var background = document.body.children[0].children[0].children[2]
        .children[0].children[2];
    plus.addEventListener("click", function () {
        i += 1;
        document.body.style.fontSize = i + "px";
    });
    minus.addEventListener("click", function () {
        i -= 1;
        document.body.style.fontSize = i + "px";
    });
    background.addEventListener("click", function () {
        var color = background.options[background.selectedIndex].value;
        document.body.style.backgroundColor = color;
    });
};