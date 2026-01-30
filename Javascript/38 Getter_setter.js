
class User {
  constructor(name, password){
    this.name = name
    this.password = password
  }

  get password(){
    return this._password.toUpperCase()
  }

  set password(value){
    this._password = value
  }
}

const bipesh = new User("Bipesh", "abcde")
console.log(bipesh.password)
console.log(bipesh)


// Onject get and set
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);



// Function based get and set
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);
