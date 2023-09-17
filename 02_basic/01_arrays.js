// array
// declaration of array
const myArray = [0, 1, 2, "hi", "bye"];
///
// console.log(myArray[4]);

//* Array Mathods
const myArr2 = new Array(0, 1, 2, 3, 4, 5)
// myArr2.push(8)
// myArr2.pop()    // Removes last value of array
// myArr2.unshift(6)   // Inserts element at the 0th index
// myArr2.shift(6) // Removes element from 0th index

// console.log(myArr2);

// console.log(myArr2.includes(8));
// console.log(myArr2.indexOf(3));
// console.log(myArr2.indexOf(6)); // If element is not in array then it will give -1 index

// join method
// console.log(myArr2.join()); //gives array in string
// console.log(typeof(myArr2.join()));

// slice, splice
// console.log("A", myArr2);
const myn1 = myArr2.slice(0,3)
// console.log(myn1);

// console.log("B", myArr2);

const myn2 = myArr2.splice(1,3)
// console.log("C", myArr2);
// console.log(myn2);


//** Array 2 */
const marvel = ["ironman", "hulk", "thore", "black_widow"]
const dc = ["aquaman", "flash", "batman", "wonder_woman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[4][2]);

// concat returns new array
// const marvel_dc = marvel.concat(dc)
// console.log(marvel_dc);

// spread oprator
const marvel_dc_spread = [...marvel, ...dc]
// console.log(marvel_dc_spread);

const concatArray = [1, 2, 3, [4, 5, 5], 6, [7, 8, [9, 6]]]
const normalArray = concatArray.flat(3) // Or we can use Infinity instead of 3 (depth)
// console.log(normalArray);

// from() this method will Convert value into Array
console.log(Array.isArray("Prashant"));
console.log(Array.from("Prashant"));
console.log(Array.from({name: "Prashant"}));    // This will give empty array []

const score1 = 500;
const score2 = 350;
const score3 = 400;
console.log(Array.of(score1, score2, score3));