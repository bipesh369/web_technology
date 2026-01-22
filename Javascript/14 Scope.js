// {} this is scope

// let a = 10   // this is global scope and it automatically goes into local/block scope
// const b = 20
// var c = 30

let a = 100
if(true) {  // this is local/block scope and it does not go outside the local scope
  let a = 10
const b = 20
var c = 30
console.log("Inner value of a is: ", a)
}
console.log(a)
//console.log(b)
//console.log(c)


// Note: Important For Interview
// Scope behaves different in nodejs code environment and in inscept code environment
