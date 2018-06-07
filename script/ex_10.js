window.onload = function () {
    var result = document.body.children[0].children[0]
        .children[2].children[0].children[0];
    var erase = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[0];
    var clear = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[1];
    var modulo = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[2];
    var divide = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[3];
    var sept = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[4];
    var huit = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[5];
    var neuf = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[6];
    var multiply = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[7];
    var quatre = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[8];
    var cinq = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[9];
    var six = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[10];
    var minus = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[11];
    var un = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[12];
    var deux = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[13];
    var trois = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[14];
    var plus = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[15];
    var zero = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[16];
    var comma = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[17];
    var equal = document.body.children[0].children[0].children[2]
        .children[0].children[1].children[18];
    var calcul = 0;
    var clicked_plus = 0;
    var clicked_minus = 0;
    var clicked_divide = 0;
    var clicked_multiply = 0;
    var clicked_modulo = 0;
    var clicked_equal = 0;
    var negative = 0;
    var display = "";
    var current_nbr = "";

    un.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "1";
        current_nbr += "1";
        result.innerHTML = display;
    });
    deux.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "2";
        current_nbr += "2";
        result.innerHTML = display;
    });
    trois.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "3";
        current_nbr += "3";
        result.innerHTML = display;
    });
    quatre.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "4";
        current_nbr += "4";
        result.innerHTML = display;
    });
    cinq.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "5";
        current_nbr += "5";
        result.innerHTML = display;
    });
    six.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "6";
        current_nbr += "6";
        result.innerHTML = display;
    });
    sept.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "7";
        current_nbr += "7";
        result.innerHTML = display;
    });
    huit.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "8";
        current_nbr += "8";
        result.innerHTML = display;
    });
    neuf.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "9";
        current_nbr += "9";
        result.innerHTML = display;
    });
    zero.addEventListener("click", function () {
        if (clicked_equal === 1) {
            display = "";
            clicked_equal = 0;
            calcul = 0;
        }
        display += "0";
        current_nbr += "0";
        result.innerHTML = display;
    });
    plus.addEventListener("click", function () {
        display += " + ";
        if (current_nbr !== "") {
            calcul += parseFloat(current_nbr, 10);
        }
        current_nbr = "";
        result.innerHTML = display;
        clicked_plus = 1;
        clicked_modulo = 0;
        clicked_multiply = 0;
        clicked_divide = 0;
        clicked_minus = 0;
        clicked_equal = 0;
    });
    minus.addEventListener("click", function () {
        display += " - ";
        if (current_nbr !== "" && calcul !== 0) {
            calcul -= parseFloat(current_nbr, 10);
        }
        else if (current_nbr !== "" && calcul === 0) {
            calcul += parseFloat(current_nbr, 10);
        }
        current_nbr = "";
        result.innerHTML = display;
        clicked_plus = 0;
        clicked_modulo = 0;
        clicked_multiply = 0;
        clicked_divide = 0;
        clicked_minus = 1;
        clicked_equal = 0;
    });
    divide.addEventListener("click", function () {
        display += " / ";
        if (current_nbr !== "") {
            calcul /= parseFloat(current_nbr, 10);
        }
        current_nbr = "";
        result.innerHTML = display;
        clicked_plus = 0;
        clicked_modulo = 0;
        clicked_multiply = 0;
        clicked_divide = 1;
        clicked_minus = 0;
        clicked_equal = 0;
    });
    multiply.addEventListener("click", function () {
        display += " * ";
        if (current_nbr !== "") {
            calcul *= parseFloat(current_nbr, 10);
        }
        current_nbr = "";
        result.innerHTML = display;
        clicked_plus = 0;
        clicked_modulo = 0;
        clicked_multiply = 1;
        clicked_divide = 0;
        clicked_minus = 0;
        clicked_equal = 0;
    });
    modulo.addEventListener("click", function () {
        display += " % ";
        current_nbr = "";
        result.innerHTML = display;
        clicked_plus = 0;
        clicked_modulo = 1;
        clicked_multiply = 0;
        clicked_divide = 0;
        clicked_minus = 0;
        clicked_equal = 0;
    });
    equal.addEventListener("click", function () {
        if (current_nbr !== "" && clicked_plus === 1) {
            calcul += parseFloat(current_nbr);
        }
        if (current_nbr !== "" && clicked_minus === 1) {
            calcul -= parseFloat(current_nbr);
        }
        if (current_nbr !== "" && clicked_divide === 1) {
            calcul /= parseFloat(current_nbr);
        }
        if (current_nbr !== "" && clicked_multiply === 1) {
            calcul *= parseFloat(current_nbr);
        }
        if (current_nbr !== "" && clicked_modulo === 1) {
            calcul %= parseFloat(current_nbr);
        }
        display = "";
        display += calcul;
        result.innerHTML = display;
        current_nbr = "";
        clicked_equal = 1;
        clicked_plus = 0;
        clicked_modulo = 0;
        clicked_multiply = 0;
        clicked_divide = 0;
        clicked_minus = 0;
    });
    clear.addEventListener("click", function () {
        display = "";
        calcul = 0;
        current_nbr = "";
        result.innerHTML = display;
    });
};