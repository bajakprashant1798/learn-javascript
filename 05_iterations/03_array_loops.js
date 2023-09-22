//// for of
//// ["","",""]
//// [{},{},{}]

const arr1 = [1, 2, 3, 4, 5]
//// for (const iterator of object) {}
for (const num of arr1) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`Each char is ${greet}`);
}

//// Maps
const map1 = new Map()
map1.set("IN", "India")
map1.set("USA", "United States of America")
map1.set("Fr", "France")
map1.set("IN", "India") // this will not add another key and value

// console.log(map1);

for (const key of map1) {
    console.log(key);
}

for (const [key, value] of map1) {
    console.log(key, ":-", value);
}


//// for in
const programming = ["js", "ruby", "py", "cpp", "java"]
for (const key in programming) {
    console.log(`${key}: ${programming[key]}`);
}

for (const key in map1) {
    console.log(key);
}