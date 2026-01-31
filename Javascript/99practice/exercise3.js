// Sloppy Mode (defalult behavior)

// 1. Auto-creates global variables
//username = "Sudip" // No error, creates windows.username

// 2. Silent failures
// var obj = {}
// Object.defineProperties(obj, "x", { value: 46, writable: false})
// obj.x = 100  // Silently fails! obj.x is still 42

// 3. Duplicate parameters allowed
function test(a, a, b) { // no error
  console.log(a + b) // which a is used?
}
test(1, 2, 3)

// 4. 'this' in functions = window
function showThis(){
  console.log(this) // window object
}
showThis()

// 5. Assignment to undefined
undefined = "something"  // No error in sloppy mode