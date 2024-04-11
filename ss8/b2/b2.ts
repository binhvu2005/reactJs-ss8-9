interface Person {
    name: string;
    age: number;
    address: object;
}

function validatePerson(obj: any): obj is Person {
    return typeof obj.name === 'string' &&
           typeof obj.age === 'number' &&
           typeof obj.address === 'object';
}

const person1 = {
    name: "John",
    age: 30,
    address: { street: "123 Main St", city: "City", country: "Country" }
};

const person2 = {
    name: "Jane",
    age: "25", 
    address: { street: "456 Park Ave", city: "City", country: "Country" }
};

console.log(validatePerson(person1)); 
console.log(validatePerson(person2)); 
