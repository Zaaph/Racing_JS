window.onload = function () {
    var footer = document.body.children[0].children[0].children[2];
    var cadre = document.body.children[0].children[0].children[2].children[0];
    var cadre_deux = document.body.children[0].children[0].children[2].children[1];
    var ok_button = document.body.children[0].children[0]
        .children[2].children[0].children[0];
    var tmp = cadre.innerHTML;
    var date = new Date();
    var cookie_str = "acceptCookies=true; expires=";
    var get_cookie_value = "";
    date.setDate(date.getDate() + 1);
    cookie_str += date.toUTCString();

    ok_button.addEventListener("click", function () {
        document.cookie = cookie_str;
        get_cookie_value = document.cookie.substring(14, 19);
        console.log("coucou");
        if (get_cookie_value === "true" && document.cookie) {
            cadre.innerHTML = "";
            var clone = cadre.cloneNode();
            footer.appendChild(clone);
            clone.innerHTML = "<button>Supprimer le cookie</button>";
            var suppr_button = document.body.children[0].children[0]
                .children[2].children[1].children[0];
        }
        if (typeof suppr_button !== "undefined") {
            suppr_button.addEventListener("click", function () {
                document.cookie = "acceptCookies=; expires=Thu, ";
                document.cookie += "01 Jan 1970 00:00:00 UTC";
                clone.remove();
                cadre.innerHTML = tmp;
            });
        };
    });
};
