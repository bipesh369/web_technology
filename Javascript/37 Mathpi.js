

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
//console.log(descriptor)

//console.log(Math.PI)
//Math.PI = 5
//console.log(Math.PI)

const tea = {
  name: 'black tea',
  price: 250,
  isAvailable: true,

  orderTea: function(){
    console.log("Tea is not ready")
  }
}

console.log(Object.getOwnPropertyDescriptor(tea, "name"))

Object.defineProperty(tea, "name", {
  //writable: false,
  enumerable: true // if it is true then it also shows name key and value
})

console.log(Object.getOwnPropertyDescriptor(tea, "name"))

for (const [key, value] of Object.entries(tea)) {
  if (typeof value !== 'function'){
    console.log(`key: ${key} and value: ${value}`)
  }
}