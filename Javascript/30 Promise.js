// Promise is an object which is complete in future
// Promise is in one of these states:
// 1.pending: meaning that the operation was compleeted successfully
// 2.fulfulled: meaning that the operation was completed successfully
// 3.rejected: meaning that the operation failed

// first method to write promise
// const promiseOne = new Promise(function(resolve, reject){
//   // Do an async task
//   // DB calls, cryptography, network
//   setTimeout(function(){
//     console.log('Async task is complete')
//     resolve() // this line connecct then with resolve
//   }, 1000)
// })

// promiseOne.then(function(){ // then is direct connected to the resolve
//   console.log("Promise consumed")
// })


// second method to write promise
// new Promise(function(resolve, reject){
//   setTimeout(function(){
//     console.log("Async task 2")
//     resolve()
//   }, 1000)
// })
// .then(function(){
//   console.log("Async 2 resolved")
// })


// third method
// const promiseThree = new Promise(function(resolve, reject) {
//   setTimeout(function(){
//     resolve({username: "bipesh", email: "juniorbipesh@gmail.com"})
//   }, 1000)
// })

// promiseThree.then(function(user){
//   console.log(user)
// })


// fourth method
// const promiseFour = new Promise(function(resolve, reject){
//   setTimeout(function(){
//     let error = false
//     if (!error) {
//       resolve({username: "bipesh", password: "12345"})
//     }else {
//       reject("Error: something was wrong")
//     }
//   }, 1000)
// })

// let username = promiseFour
// .then((user) => {
//   console.log(user)
//   return user.username
// })
// .then((username) =>{
//    console.log(username)
// })
// .catch((error) =>{
//   console.log(error)
// }).finally(() => console.log("The promise either resolve or rejected"))


// fifth method
// const promiseFive = new Promise((resolve, reject) =>{
//    setTimeout(function(){
//     let error = true
//     if (!error) {
//       resolve({username: "junior", password: "56789"})
//     }else {
//       reject("Error: something was wrong")
//     }
//   }, 1000)
// })

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive
//     console.log(response)
//   } catch (error) {
//     console.log(error)
//   }
// }
// consumePromiseFive()


// //--------------------------------------
// async function getAllUsers() {
//  try {
//    const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data)
//  } catch (error) {
//   console.log(error)
//  }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => console.log(error))