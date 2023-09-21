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


// // here we can see example of string interpolation too
// function loginUserMessage(username) {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Prashant"));
// console.log(loginUserMessage());    // result would be undefined just logged in

// default username is ram
function loginUserMessage(username = "ram") {
    return `${username} just logged in`
}
console.log(loginUserMessage("Prashant"));  // this will override username ram into Prashant
console.log(loginUserMessage());
