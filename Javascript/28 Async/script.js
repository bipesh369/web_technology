
// const sayBipesh = function(){
//   console.log("Bipesh Junior")
// }
// setTimeout(sayBipesh, 2000)

const changeText = function() {
  document.querySelector('h1').innerHTML = "Junior Bipesh"
}
//setTimeout(changeText, 2000) // it takes referance of changeText

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#button').addEventListener('click', function(){
  clearTimeout(changeMe)
  console.log("Stopped")
})