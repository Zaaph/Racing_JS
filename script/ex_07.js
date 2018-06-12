/*jslint browser:true*/
window.onload = function () {
    "use strict";
    var canvas = document.body.children[0].children[0].children[2]
        .children[0].children[0];
    var context = canvas.getContext("2d");
    var pause = document.body.children[0].children[0].children[2]
        .children[1].children[0];
    var stop = document.body.children[0].children[0].children[2]
        .children[1].children[1];
    var mute = document.body.children[0].children[0].children[2]
        .children[1].children[2];
    var blc = new window.Audio("blc.ogg");
    var i = 1;
    context.strokeStyle = "white";
    context.beginPath();
    context.moveTo(6, 6);
    context.lineTo(14, 10);
    context.lineTo(6, 14);
    context.closePath();
    context.stroke();
    canvas.addEventListener("click", function () {
        blc.play();
    });
    pause.addEventListener("click", function () {
        blc.pause();
    });
    stop.addEventListener("click", function () {
        blc.pause();
        blc.currentTime = 0;
    });
    mute.addEventListener("click", function () {
        if (i % 2 !== 0) {
            blc.volume = 0;
        } else if (i % 2 === 0) {
            blc.volume = 1;
        }
        i += 1;
    });
};