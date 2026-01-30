// ES6

// class User {
//   constructor(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
//   }

//   ecnryptPassword(){
//     return `${this.password}abc`
//   }


// changeUsername(){
//   return `${this.username.toUpperCase()}`
// }
// }

// const tea = new User("tea", "tea@gmail.com", "123")

// console.log(tea.ecnryptPassword())
// console.log(tea.changeUsername())


// behind the scene

function User(username, email, password){
  this.username = username
  this.email = email
  this.password = password
}

User.prototype.ecnryptPassword = function(){
  return `${this.password}abc`
}
User.prototype.changeUsername = function(){
  return `${tthis.username.toUpperCase()}`
}

const coffee = new User("coffee", "coffee@gmail.com", "56789")

console.log(coffee.ecnryptPassword())
console.log(coffee.changeUsername())