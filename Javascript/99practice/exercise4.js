"use strict"  // Must be the first statement

//message = "Hello Bipesh" // ReferenceError!

// Global strict mode 
"use strict"
var x = 10 // Entire file is strict

// Function-level strict mode
function strictFunction() {
  //"use strict" 
  y = 20  // Errors: y is not defined
}
var z = 30  // Sloppy mode here

// ES6 modules are authomatically strict
// No need for "use strict" in module files
export function calculate(){
  undeclared = 5 // Error!
}