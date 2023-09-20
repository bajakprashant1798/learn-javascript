// Object declaration

// two ways of declaration
// 01 singleton (using constractor)

// Object.create

// 02 object literals
const mySym = Symbol("key1")    // To use symbol

const PrUser = {
    "full name": "Prashant Bajak",
    name: "Prashant",
    [mySym]: "myKey1",   // To use symbol
    age: 24,
    location: "Delhi",
    email: "prashant@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}   // symbol and arrays in object

// two ways to access object
// console.log(PrUser.name);
//// console.log(PrUser.full name); // cannot write this way
// console.log(PrUser["full name"]);
// console.log(PrUser[mySym]);

PrUser.email = "prashant@newemail.com"
// console.log(PrUser.email);

// For lock the value of object we have to freeze the object
// Object.freeze(PrUser);
PrUser.email = "prashant@oldemail.com"
// console.log(PrUser.email);
// console.log(PrUser);    // it will print vales but won't change value

PrUser.greeting = function() {
    console.log("Hello World!");
}
console.log(PrUser.greeting());

PrUser.greetingTwo = function() {
    console.log(`Hello World!, ${this.name}`);
}
console.log(PrUser.greetingTwo());