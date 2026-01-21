// Arrays

const myArray = [1, 2, 3, 4, 5, 6]
// console.log(myArray[3])


// Arrays Methods

// myArray.push(7)  // To add value at the end of the array
// console.log(myArray)

// myArray.pop()   // To remove value form end of the array
// console.log(myArray)

// myArray.unshift(8) // To add value at the beginning of the array
// console.log(myArray)

// myArray.shift()   // To delete value from the beginning of the array
// console.log(myArray)

// const newArr = myArray.join()  // Join converts arrays into string
// console.log(newArr)
// console.log(typeof(newArr))

// Slice and Splice
console.log("A", myArray)

const myArr1 = myArray.slice(0, 3)  // slice returns a new array from index 0 up to (but not including) 3
// it does NOT change the original array

console.log(myArr1)
console.log("B", myArray)

const myArr2 = myArray.splice(0, 3) 
// splice removes 3 elements starting from index 0
// it DOES change the original array
// It removes deleteCount elements starting from start
console.log("c", myArray)
console.log(myArr2)

// ------------------------------------------

const south_heros = ["Prabhas", "Arjun", "Vijay"]
const bolly_heros = ["Vicky", "Ranbir", "Hritic"]

// Push Method
// south_heros.push(bolly_heros)
// console.log(south_heros)
// console.log(south_heros[3])

// Concate It return new array so we need to make new variable
// const combHeros = south_heros.concat(bolly_heros)
// console.log(combHeros)

// Spread Many Developer Prefer to use Spread Method like Given Below:
const allHeros = [...south_heros, ...bolly_heros]
console.log(allHeros)

// Nested Arrays
const nestArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const sinleArray = nestArray.flat(Infinity) // Flat returns new no nested array from nested array and into falt(we give depth value of)
console.log(sinleArray)

console.log(Array.isArray("Bipesh Junior"))
console.log(Array.from("Bipesh Junior"))
console.log(Array.from({name: "Bipesh"})) // This is Impt for interview and it does not convert directly into array

// making variable into array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))