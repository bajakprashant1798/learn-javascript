// function is a keyword
function sayMyName() {
    console.log("B");
    console.log("A");
    console.log("J");
    console.log("A");
    console.log("K");        
}

// // this is referance of function => sayMyName
// sayMyName
// // this is execution of function => sayMyName()
// sayMyName()

// here (num1, num2) is called parameter
// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2) {
    // let result = num1 + num2
    // console.log("Prashant1");
    // return result
    // // code will not responde  after return statement
    // console.log("Prashant2");

    // another way of same thing
    return num1 + num2
}
//// when we call function (2, 3) is called arguments
// addTwoNumber(2,3)
const result = addTwoNumber(2,3)
// console.log("Result:", result);    // undefined


//// (string interpolation) here we can see example of string interpolation too
// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Prashant"));
// console.log(loginUserMessage());    // result would be undefined just logged in

//// default username is ram
function loginUserMessage(username = "ram") {
    return `${username} just logged in`
}
// console.log(loginUserMessage("Prashant"));  // this will override username ram into Prashant
// console.log(loginUserMessage());


// // rest operator
// function calculateCartPrice(...number1) {
//     return number1
// }
// console.log(calculateCartPrice(200, 300, 500));

function calculateCartPrice(val1, val2, ...number1) {
    return number1
}
console.log(calculateCartPrice(200, 300, 500, 2000));

const user = {
    username: "Prashant",
    price: 562
}

// Object and function
// (string interpolation)
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
//// another way
handleObject({
    username: "ram",
    price: 698
})

// Array and function
const myNewArray = [200, 500, 300, 800]
function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// // anotherway
console.log(returnSecondValue([200, 500, 300, 800]));