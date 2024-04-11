type A = {
    foo: number;
    bar: string;
};

type B = {
    baz: boolean;
};

type Combined = A & B;

const obj: Combined = {
    foo: 123,
    bar: 'hello',
    baz: true
};
type AnyObject = {
    [key: string]: any;
};

function combineObjects<T extends AnyObject, U extends AnyObject>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
}

const obj1 = {a: 1, b: 2};
const obj2 = {b: 3, c: 4};
const combined = combineObjects(obj1, obj2);
console.log(combined);
