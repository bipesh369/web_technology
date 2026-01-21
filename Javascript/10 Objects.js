 // Singleton is an object which is made by using constructor
 Object.create // in this way singleton is created

 // Object Literals
 // interviewer ask take symbol and add it into key and print it

 const mySymboll = Symbol("key1")

 const jsUser = {
   name: "Bipesh",
  "full name": "Bipesh Junior Tharu",
   Role: "Frontend Developer",
   mySymboll: "mykey1", // this is not a best way
   [mySymboll]: "mykey1", // this is a best way to write symboll
   Age: 22,
   email: "juniorbipesh@gmail.com",
   phone: 9763852173,
 }
 console.log(jsUser)
 // method to access the key value of object
 console.log(jsUser.name) // first method
 console.log(jsUser["Role"]) // second method
 console.log(jsUser["full name"])
 console.log(jsUser.mySymboll)
 console.log(jsUser[mySymboll])

 // to change the existing value of key
 jsUser.name = "Bipesh Junior"
 // Object.freeze(jsUser) // The object is frozen. From this point on, changes are not allowed.
 jsUser.name = "Vipesh Junior"
 console.log(jsUser.name) // So output is Bipesh Junior

 jsUser.greeting = function() {
  console.log("Hello JS User")
 }
 jsUser.greetingTwo = function() {
  console.log(`Hello JS User, ${this.name}`)
 }


 console.log(jsUser.greeting) // this return referance
 console.log(jsUser.greeting())
 console.log(jsUser.greetingTwo())