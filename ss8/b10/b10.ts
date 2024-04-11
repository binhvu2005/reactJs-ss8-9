interface Person3 {
    name: string;
    age: number;
}

interface them  {
    employeeId: string;
}

// Example usage:
let employee: Person3&them = {
    name: "John",
    age: 30,
    employeeId: "epm123"
};

console.log(employee);
