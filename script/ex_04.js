/*jslint browser:true*/
window.onload = function () {
    /*"use strict";*/
    var cadre = document.body.children[0].children[0].children[2].children[0];
    var str = "";
    document.onkeypress = function (event) {
        event = event || window.event;
        var char_code = event.keyCode || event.which;
        var char = String.fromCharCode(char_code);
        str += char;
        cadre.innerHTML = str.substr(-42);
    };
};