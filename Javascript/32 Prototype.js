// Javascript mechanish impt for interview
// In Js every things are object

// This given example is about to understand object and new keyword
// function multipleBy5(num){
//   return num*5
// }

// multipleBy5.power = 2

// console.log(multipleBy5(5))// output is 25
// console.log(multipleBy5.power) // output is 2
// console.log(multipleBy5.prototype)//output is {}


// function createUser(username, score) {
//   this.username = username
//   this.score = score
// }

// createUser.prototype.increment = function(){
//   this.score++
// }

// createUser.prototype.printMe = function(){
//   console.log(`score is ${this.score}`) 
// }

// const chai = new createUser("bjr", 23)// new helps to inject value in function
// const coffee = new createUser("coffee", 150)

// chai.printMe()
// coffee.printMe()


// This given example is about to understand prototype
//let myName = "bipesh"
//console.log(myName.truelength)

 const hero = ["Prabhas", "Vijay", "NTR"]

 let heroPower = {
  prabhas: "rebel",
  vijay: "roudy",
  ntr: "tiger",

  getPrabhasPower: function(){
    console.log(`Prabhas power is ${this.prabhas}`)
  }
 }

 Object.prototype.bipesh = function(){
  console.log(`bipesh`)
 }
//heroPower.bipesh()


// Inheritance
const User = {
  name: "bipesh",
  email: "juniorbipesh@gmail.com"
}

const Teacher = {
  makeVideo: true
}

const TeachingSupport = {
  isAvailable: false
}

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport
}

TeachingSupport.__proto__ = User


 // modern syntax
 Object.setPrototypeOf(TeachingSupport, Teacher)

 let anotherUsername = "Bipesh      "

 String.prototype.truelength = function(){
  console.log(`${this}`)
  console.log(`True length is: ${this.trim().length}`)
 }

 anotherUsername.truelength()
 "bipesh".truelength()
 "Junior".truelength()
 