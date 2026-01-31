// Strings are immutable
// Immutable means:
// you cannot change a string
// You can only create a new one 

let name = "Bipesh"
name[0] = "S"
console.log(name) // Bipesh
// Does nothing:
// JS did not finally
// It politely ignored you


// How changing a string actually works
let text = "hi,"
text = text + "there"
console.log(text)
//what really happened:
// "Hi" stayed untouched
// "Hi there" was created
// text now points to the new stirng


//const name = "Bipesh";
//const repoCount = 6;