

const coding = ["js", "ruby", "c++", "c"]

const values = coding.forEach ( (item) => { // it takes callback functions like item
  //console.log(item) // it does not return values
})
//console.log(values)


// filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 5)//it takes callback function
//console.log(newNums)

const newNum = myNums.filter( (num) => {
   return num > 5 // we have to write retun bcz it is in scope
})
//console.log(newNums)


// Channing

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newValue  = numbers.map( (num) => num * 10 )
.map( (num) => num + 1 )
.filter ( (num) => num >= 50)

//console.log(newValue)


// reduce --------------------------------

const count = [1, 2, 3, 4, 5]

// const myTotal = count.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`)
// return acc + currval 
// }, 0)

// console.log(myTotal)

// arrow function

const myTotal = count.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotal)