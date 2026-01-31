// Dates are Objects, not Primitives
// That means:
// They live in memory
// They are compared by reference
// They can surprise you if you treat them like numbers or strings

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

let myCreateDate = new Date("01-19-2026")

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));








