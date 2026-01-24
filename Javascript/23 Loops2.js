// All given loops are Array specific loopps

const { cacheSignal } = require("react")

// for of loop

const arra = [1, 2, 3, 4, 5]

for (const num of arra) {
  //console.log(num)
  
}

// Maps

const map = new Map()
map.set('NP', "Nepal")
map.set('In', "India")
map.set('CH', "China")
map.set('USA', "United States of America")
map.set('FR', "France")
//console.log(map)


// for of loop

for (const [key, value] of map) {  // [key, value] destructure of key and vlaue
  //console.log(key, ':-', value)
}


const myObject = {
  'sub1': 'Simulation',
  'sub2': 'Ethics',
  'sub3': 'criptography',
  'sub4': 'DDA',
  'sub5': 'web technology'
}
// in object for of  loop is not working 

// for (const [key, value] of myObject) {
//   console.log(key, value)
// }


// for in loop

for (const key in myObject) {
  //console.log(myObject[key])  
}

// for in using in array

const programming = ["javascript", "python", "java", "c++"]
for (const key in programming) {
  //console.log(programming[key])
}


// for each loop

const codeLanguage = ["js", "rb", "cpp", "c"]

// codeLanguage.forEach(function (val) {
//   console.log(val)
// })

codeLanguage.forEach( (val) => {
  console.log(val)
})
