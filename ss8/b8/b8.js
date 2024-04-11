"use strict";
const obj = {
    foo: 123,
    bar: 'hello',
    baz: true
};
function combineObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = combineObjects(obj1, obj2);
console.log(combined);
