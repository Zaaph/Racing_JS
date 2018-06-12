/*jslint browser:true*/

window.onload = function () {
    "use strict";
    var cadre = document.body.children[0].children[0].children[2].children[0];
    var pango = localStorage.getItem("pangolin");
    cadre.innerHTML = "<img src=\"" + pango + "\" alt=\"pangolin\">";
    var pangolin_img = cadre.children[0];
    var percent_wth = pangolin_img.width / 100;
    var percent_hgt = pangolin_img.height / 100;
    pangolin_img.addEventListener("mouseover", function () {
        
    })
    pangolin_img.addEventListener("mouseleave", function () {
        cadre.style.backgroundColor = "white";
    })
};