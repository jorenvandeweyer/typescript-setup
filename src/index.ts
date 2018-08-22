const { add } = require("./add");

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

const user = { firstName: "Jane", lastName: "Doe"};

// tslint:disable-next-line:no-console
console.log(greeter(user));
// tslint:disable-next-line:no-console
console.log("2+1=", add(2, 1));

export {};
