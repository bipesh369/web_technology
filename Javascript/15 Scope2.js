// Scope level and mini hosting

function one() {
  const username = "Bipesh"
  
  function two() {
    const email = "juniorbipesh@gmail.com"
    console.log(username)
  }
  //console.log(email)
  two()

}
one()

if (true) {
  const name = "Bipesh"
  if (name === "Bipesh") {
    const middle = " Junior"
    console.log(name + middle)
  }
  //console.log(middle)
}
//console.log(name)


//------ Interesting ------------
console.log(addOne(5))
function addOne(num){
  return num + 1
}

// hoisting function
addTwo(5)
const addTwo = function addTwo(num){
  return num + 2
}
