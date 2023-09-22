// // if
const isUserLoggedIn = true

if (isUserLoggedIn) {
    
}

// // <, >, <=, >=, ==, !=, ===
// // === check type

if (2 == "2") {
    console.log("executed");
}

// // 2 === "2" types are different here one is number datatype second is string
if (2 === "2") {
    console.log("executed");
} else {
    console.log("did not executed");
}

const balance = 1000
// // implicit scope
if (balance > 500) console.log("test");

////  &&(and) 
////  ||(or)