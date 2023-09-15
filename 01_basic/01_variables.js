const accountId = 12345678
let accountEmail = "prashant@my-email.com"
var accountPass = "P12345678"
accountCity = "Ahmedabad"
let accountStatus;
// if variable is decleared and value is not given to  it then value is undefined

// accountId = 12345 //not allowed
accountEmail = "bajak@my-email.com"
accountPass = "B12345678"
accountCity = "Delhi"

/*
prefer not to use var because it creates issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPass, accountCity, accountStatus])