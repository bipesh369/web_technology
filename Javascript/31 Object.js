// Object Oriented Programming
// Javascript is prototype-based language
// Classes are primarily syntactic sugar over

// Object Literals
const user = {
  username: "bipesh",
  loginCount: 10,
  signedIn: true,

  getUserData: function(){
    //console.log("Got user details from database")
    //console.log(`username: ${this.username}`)
    console.log(this)
  } 
}
console.log(user.username)
//console.log(user.getUserData())

// Construction Function
function User(username, loginCount, isLoggedIn) {
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  //return this // it does not need to write
}

const userOne = new User("bipesh", 10, true)// this new object creates new empty object which is called instances
const userTwo = new User("junior", 5, false)
//console.log(userOne)
console.log(userTwo.constructor)


