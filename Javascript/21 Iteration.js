// for loop

// for (let index = 0; index <= 10; index++) {
//   const element = index;
//   if(element == 5) {
//     console.log("5 number is best")
//   }
//   console.log(element)
  
// }

// Nested Loop

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop value: ${i}`)

//   for (let j = 1; j <= 10; j++) {
//     console.log(`inner loop value: ${j} and ${i}`)
//     console.log(`${i} * ${j} = ${i * j}
// `)
//   }
// }

const myArray = ["Bipesh", "Sudip", "Rajib"]
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element)  
}


// Break and Continue

// for (let index = 1; index <= 15; index++) {
//   if (index === 5) {
//     console.log(`${index} is best number`)
//     break
//   }

//   console.log(`value of i is: ${index}`)
  
// }

// continue

for (let index = 1; index <= 15; index++) {
  if (index === 5) {
    console.log(`${index} is best number`)
    continue // it says one time forgive me or ignore
  }

  console.log(`value of i is: ${index}`)
  
}