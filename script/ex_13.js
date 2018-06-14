/*jslint browser:true*/
window.onload = function () {
    /*"use strict";*/
    var cadre = document.body.children[0].children[0].children[2].children[0];
    var pango = localStorage.getItem("pangolin");
    cadre.innerHTML = "<img src=\"" + pango + "\" alt=\"pangolin\">";
    var pangolin_img = cadre.children[0];
    var interval = 0;
    var i = 100;
    function grow() {
        if (i < 100) {
            i += 1;
            pangolin_img.style.height = i + "%";
            pangolin_img.style.width = i + "%";
        }
    }
    function shrink() {
        if (i > 0) {
            i -= 1;
            pangolin_img.style.height = i + "%";
            pangolin_img.style.width = i + "%";
        }
    }
    pangolin_img.addEventListener("mouseover", function () {
        clearInterval(interval);
        shrink();
        interval = setInterval(shrink, 1000);
    });
    pangolin_img.addEventListener("mouseout", function () {
        clearInterval(interval);
        grow();
        interval = setInterval(grow, 1000);
    });
    pangolin_img.addEventListener("click", function () {
        clearInterval(interval);
        localStorage.removeItem("pangolin");
        pangolin_img.remove();
    });
};