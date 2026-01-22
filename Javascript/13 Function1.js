// functions and parameters

function addTwoNumbers(num1, num2){
  console.log(num1 + num2)
}
addTwoNumbers(3, 7)

// in thsi way parameter is taking
function loginUserMessage(username) {
  return `${username} just logged in`
}
console.log(loginUserMessage("bipesh"))
console.log(loginUserMessage()) // output comes undefined imp for interview


// function with object
function calculateCartPrice(...num1) {
  return num1
}
console.log(calculateCartPrice(200, 400, 500))

const user = {
  name: "Bipesh",
  price: 1000
}

function handleObject(anyobject){
   console.log(`name is ${anyobject.name} and price is ${anyobject.price}`)
}
handleObject(user)