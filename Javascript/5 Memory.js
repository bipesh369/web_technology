// two types of memory:

// Stack (primitive), Heap (Non-Primitive)

let name = "Bipesh Junior";
let newName = name;
newName = "Junior Bipesh";
console.log(newName);

let userOne = {
  email: "juniorbipesh@gamil.com",
  phone: 9763852173,
}

userTwo = userOne
userTwo.email = "bipeshjunior@gmail.com"
console.log(userTwo.email);


// The mental model that never fails
// Primitives → copied
// Objects → shared unless you explicitly copy
// Say this in your head when coding:
// “Am I copying a value or sharing memory?”
// If you answer that correctly, you avoid 90 percent of bugs.

// JavaScript does not store values the same way for everything.
// There are two memory behaviors:
// Stored by value
// Stored by reference
// Every memory confusion comes from not knowing which one you’re dealing with.

// Stored by value
// let a = 10
// let b = a
// b = 30
// console.log(a) //10
// console.log(b) //10
// Beacuse: a has its own value and b gets a copy of a so changing b does not update a


// Stored by reference
// reference type: object, arrays, function
let a = { name: "Bipesh"}
let b = a;
b.name = "junior"
console.log(a.name) // bipesh
// Both a and b point to the same place in memory
// you did't copy the object, you copy the address of a
