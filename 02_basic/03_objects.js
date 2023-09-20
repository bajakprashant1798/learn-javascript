// 01 singleton (using constractor)

// const tinderUser = new Object()
const tinderUser = {}
// console.log(tinderUser);    // both gives same empty object

tinderUser.id = "123LL"
tinderUser.name = "Ram"
tinderUser.isLoggedin = false

// console.log(tinderUser);

// object in object
const regularUser = {
    email: "ram.23@eamil.com",
    fullname: {
        userfullname: {
            firstname: "ram",
            lastname: "rom"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);


// concatinate objects
// key: value   =>  1: "a"
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// this is wrong way of concate objects
// const obj3 = { obj1, obj2 }
// console.log(obj3);

// this is right way of concate objects
// for combine two object we need   Object.assign(target, source)  method
const obj4 = Object.assign(obj1, obj2)
// console.log(obj4);

// if number of objects are odd for instance
const newobj1 = {1: "a", 2: "b"}
const newobj2 = {3: "c", 4: "d"}
const newobj3 = {5: "a", 6: "b"}
// here we have one target and two source in this case we have to take one empty object {} which represents one as target and other three are source
// const returnobj4 = Object.assign({}, newobj1, newobj2, newobj3)
// console.log(returnobj4);

// another way
const returnobj5 = {...newobj1, ...newobj2, ...newobj3}
// console.log(returnobj5);

// array of object
const users = [
    {
        id: 1,
        email: "new1@email.com"
    },
    {
        id: 2,
        email: "new2@email.com"
    },
    {
        id: 3,
        email: "new3@email.com"
    },
]
// console.log(users[0].email)

console.log(tinderUser);