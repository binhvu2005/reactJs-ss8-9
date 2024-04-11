"use strict";
function binhphuong(a) {
    if (typeof a === "number") {
        return a * a;
    }
    else if (Array.isArray(a)) {
        for (var i = 0; i < a.length; i++) {
            a[i] = a[i] * a[i];
        }
        return a;
    }
}
