// Inheritance

class User {
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`username is : ${this.username}`)
  }
}

class Teacher extends User{
  constructor(username, email, password){
    super(username) // this super keyword refer extends 
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`A new course was added by ${this.username}`)
  }
}

const tea = new Teacher("tea", "tea@gmail.com", "123")

tea.addCourse()


// Static Property

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){  // static does not give the property of it to the some function
        return `123`
    }
}

const hitesh = new User("bipesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());