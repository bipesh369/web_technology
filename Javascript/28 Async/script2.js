
// const sayDate = function(str){
//   console.log(str, Date.now())
//   // console.log("Junior", Date,now())
//   // console.log("Tharu", Date.now())
// }

// document.querySelector('#start').addEventListener('click', function(){
//   setInterval(sayDate, 2000, "Hi")
// })

// const intervalId = setInterval(sayDate, 2000, "Hi")
// document.querySelector('#stop').addEventListener('click', function(){
//    clearInterval(intervalId)
// })


let intervalId = null

const sayDate = function (str) {
  console.log(str, Date.now())
}

document.querySelector('#start').addEventListener('click', function () {
  if (intervalId === null) {
    intervalId = setInterval(sayDate, 2000, 'Hi')
  }
})

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(intervalId)
  intervalId = null
})
