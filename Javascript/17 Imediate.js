// Imediately Invoked Function Expressions (IIFE)

// To remove polution of global variable so we use (IIFE)
(function one(){ // Name IIFE
  console.log(`DB CONNECTED`)
}) (); // we have to end this function using semicolon ;

( (name) => { // Simple IIFE
  console.log(`DB CONNECTED ${name}`);
}) ('Bipesh')