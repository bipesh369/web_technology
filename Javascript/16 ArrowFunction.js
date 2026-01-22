
const user = {
  name: "Bipesh",
  price: 1000,

  welcomeMessage: function(){ //this only works in object
    console.log(`${this.name}, welcome to website`)
    console.log(this)
  }
}

// user.welcomeMessage()
// user.name = "Vipesh"
// user.welcomeMessage()
 //console.log(this)


//  function one(){ // thsi is not work in function
//   let name = "Bipesh"
//   console.log(this.name)
//  }
//  one()


// const two = function() {
//   let name = "Bipesh"
//   console.log(this.name)
// }
// two()


//-----Arrow Function ----------
const two = () => {
  let name = "Bipesh"
  console.log(this.name)
  console.log(this)  // gives { }
}
two()

// explicit return
// if we use curly bracess then use return
// const addTwo = (num1, num2) => {
//    return num1 + num2
// }
// console.log(addTwo(1000, 500))

// implicit return
// if we use parnthics the donot need to use return
//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)

// Return object ------ IMPT --------
const addTwo = (num1, num2) => ({name: "Bipesh"})

console.log(addTwo(1000, 500))


