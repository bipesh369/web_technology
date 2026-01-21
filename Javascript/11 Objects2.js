//const fbUser = new Object() // singleton object

const fbUser = {}  // non-singleton object

fbUser.id = "123abc"
fbUser.name = "Bipesh Junior"
fbUser.isLoggedIn = false

//console.log(fbUser)

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
    firstname: "Bipesh",
    middlename: "Junior",
    lastname: "Tharu",
    }
  }
}
//console.log(regularUser.fullname.userfullname.firstname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2} //best method is spread
console.log(obj3)