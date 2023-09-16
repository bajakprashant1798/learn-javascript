//** comparision
// console.log(2>1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// avoid this kind of conparision
// console.log(null>0);
// console.log(null<0);
// console.log(null>=0);
// console.log(undefined>0);
// console.log(undefined<0);
// console.log(undefined>=0);


// **  "==="  compares variables and with it's datatypes too

const myName = String('Hitesh-hc')

// console.log(myName.substring(8,3));
// console.log(myName.slice(-8,4));
// const myNameSlice = myName.slice(8,3)
// console.log(myNameSlice.length); //output will be blank

const emptyName = String("")

console.log(typeof emptyName);
console.log(emptyName);
console.log(emptyName.length);