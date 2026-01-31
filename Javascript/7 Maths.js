// console.log(Math.floor(4.9))
// console.log(Math.min(4, 3, 5, 7, 1, 9));
// console.log(Math.max(4, 5, 1, 3, 6, 9, 7));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1)) + min);

// Most busgs around Math are not about math. They are about types

// Never compare decimmals directly
0.1 + 0.2 === 0.3 // false
const value = (Math.round((0.1 + 0.2) * 100) / 100 === 0.3)
console.log(value)


// Useful Math Methods

// Rounding
Math.round(4.5) // 5
Math.floor(4.9) // 4
Math.ceil(4.1) // 5

// Absolute value
Math.abs(-10) // 10

// Power and square root
Math.pow(2, 3) //8
Math.sqrt(9)  // 3

// Min and Max
Math.max(1, 5, 3) // 5
Math.min(1, 5, 3) // 1

// Random numbers
Math.random() // 0 to less than 1
Math.floor(Math.random() * 10) + 1 // 1 to 10
