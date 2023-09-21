// // globle scope
// var c = 300

let a = 500

//// block scope
// if (true) {
//     let a = 10
//     const b = 55
//     //// var c = 88
//     console.log("Inner a:", a);
// }
// // console.log(a,b,c);

// console.log(a);

// // javascrip excutes line by line
function one() {
    const username = "Prashant"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    // error
    // two()
}
one()
// two()    // error


console.log(addOne(5));
function addOne(num) {
    return num + 1
}


// // sometimes it called as expression
// console.log(addTwo(5)); // error (hoisting)
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(5));
