// call and this

function setUserName(username){
  //complex DB calls
  this.username = username
}

function createUser(username, email, password){
  setUserName.call(this, username) // call helps to hold referance of function
  this.email = email
  this.password = password
}

const tea = new createUser("tea", "tea@gmail.com", "123456")
console.log(tea)