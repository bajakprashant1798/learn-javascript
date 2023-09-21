// // this (current contest) is keyword, it represent current contest
const user = {
    username: "prashant",
    price: 5999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to new world`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username ='Ram'
// user.welcomeMessage()

// console.log(this);  // it will be empty object

// // in nodejs global object is empty object
// // in browser global object is window object

// // function declaration 1
// function chai() {
//     let username = "prashant"
//     // console.log(this);
//     // console.log(this.username);  // undefined
// }

// // function declaration 2
// const chai = function () {
//     let username = "prashant"
//     console.log(this.username); // undefined
// }

// // function declaration 3 arrow function
const chai = () => {
    let username = "prashant"
    // console.log(this.username); // undefined
    console.log(this);  // empty object
}
// chai()

// // explicit return
// const addTwoNum = (num1, num2) => { 
//     return num1 + num2 
// }
// console.log(addTwoNum(4,7));

// // implicit return
// const addTwoNum = (num1, num2) => num1 + num2
const addTwoNum = (num1, num2) => (num1 + num2)
console.log(addTwoNum(4,7));

const objReturn = () => ({userName: "Prashant"})
console.log(objReturn());
console.log(objReturn().userName);