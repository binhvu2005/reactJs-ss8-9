"use strict";
function printf(a) {
    if (typeof a === 'string') {
        console.log(a);
    }
    else if (Array.isArray(a)) {
        a.forEach(() => console.log(a));
    }
}
