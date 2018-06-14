/*jslint browser:true*/
window.onload = function () {
    "use strict";
    var cadre = document.body.children[0].children[0].children[2].children[0];
    var input = document.body.children[0].children[0].children[2]
        .children[0].children[0];
    var cadre2 = document.body.children[0].children[0].children[2].children[1];
    var str = "";
    var display_str = "";
    var start_count = 0;
    var end_count = 0;
    function search(str) {
        var regex = new RegExp(/(\[.+\])(.+)(\[\/.+\])/);
        var matches = str.match(regex);
        if (matches !== null) {
            matches[3] = matches[3].slice(0, 1) + matches[3].slice(2, str.length);
            if (matches.length === 4 && matches[1] === matches[3]) {
                display_str += matches[2];
            }
        }
        return matches;
    }
    input.addEventListener("keypress", function (event) {
        event = event || window.event;
        var char_code = event.keyCode || event.which;
        var char = String.fromCharCode(char_code);
        console.log(char_code);
        if (char_code > 31 && char_code < 127) {
            str += char;
        }
        if (char_code === 8) {
            str = str.substring(0, str.length - 1);
        }
        var matches = search(str);
        if (matches[1] === "[B]" && matches[3] === matches[1]) {
            cadre2.innerHTML = matches[2];
            cadre2.style.fontWeight = "bold";
        } else if (!matches) {
            cadre2.innerHTML = "";
        }
    });
};