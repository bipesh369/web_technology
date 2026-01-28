//  document.getElementById('eyes').onclick = function() {
//   alert("You clicked on eyes")
//  }

// this given topics should learn:
// type, timestamp, defaultPrevented, target, toElemet, secElement, currentTarget
// clientx, clienty, screenX, screenY this is impt for interview 
// altkey, ctrkey, shiftkey, keycode
// bubbling events are: true and false:
//document.getElementById('images').addEventListener('click', function(){}, true or false)


// document.getElementById('nature').addEventListener('click', function(){
//   alert("You clicked on nature")
// }, false) // this fale is event propagation and false is default 
// event propagation means it goes from inner side to the outer side


// attachEvent(), jQuery have on

// event object
// document.getElementById('images').addEventListener('click', function(e){ // this e is event onject
// console.log("Clicked on images")
// }, false) // this true is capturing mode and it goes through top to bottom

// document.getElementById('bird').addEventListener('click', function(e){ // this e is event onject
// console.log("Clicked on bird")
// e.stopPropagation() // it stops the bubbling
// }, false)

// document.getElementById('google').addEventListener('click', function(e){
//    e.preventDefault()
//    e.stopPropagation()
//    console.log("clicked on google")
// }, false)


//-----------------------------------------------------------------
document.querySelector('#images').addEventListener('click', function(e){
  console.log(e.target.parentNode)
  let removeIt = e.target.parentNode
  removeIt.remove() // there are two method to remove childNode
  //removeIt.parentNode.removeChild(removeIt)
}, false)


