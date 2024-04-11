"use strict";
function calculateArea(num) {
    if (num.hinh == "vuong") {
        return num.canh * num.canh;
    }
    else if (num.hinh == "tron") {
        return Math.PI * num.canh * num.canh;
    }
}
