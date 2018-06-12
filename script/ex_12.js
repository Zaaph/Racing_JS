/*jslint browser:true*/
window.onload = function () {
    /*"use strict";*/
    var cadre = document.body.children[0].children[0].children[2].children[0];
    localStorage.setItem("pangolin", "pangolin.jpg");
    var pango = localStorage.getItem("pangolin");
    cadre.innerHTML = "<img src=\"" + pango + "\" alt=\"pangolin\">";
};