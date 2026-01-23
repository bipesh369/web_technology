// if

if (true){ // it executes insdie scope
  console.log("Bipesh")
}

if (false){ // it does not execute  inside scope
  console.log("Junior")
}

const guestUser = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle && loggedInFromEmail) {
  console.log("User Logged In ")
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
  console.log("User Logged In")
}