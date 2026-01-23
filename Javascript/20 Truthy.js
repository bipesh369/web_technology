// Assume it is ture

//const userEmail = "juniorbipesh@gmail.com" // We got an user email
const userEmail = "" // We don't have user email
//const userEmail = []  // We got an user email

if (userEmail) {
  console.log("We got an user email")
} else {
  console.log("We don't have user email")
}

// False Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
 
// Truthy Value
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
  console.log("Array is empty")
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty")
}


// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)

val2 = null ?? 20
console.log(val2)

// Ternary Operator

// condition ? true : false

const csitCourseFee = 290000
csitCourseFee <= 300000 ? console.log("less than 300K") : console.log("more than 290K")
