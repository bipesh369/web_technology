const array = [70, 20, 50, 30, 60]

// function largestNum() {
//   let largest = array[0]
//   for(let i=0; i<array.length; i++){
//     if(array[i] > largest){
//       largest = array[i]
//     }
//   }
//   return largest
// }

// console.log(largestNum(array))


function largestNumb(arr){
  const result = arr.reduce((acc, cur) =>{
    return (cur > acc) ? cur : acc
  }, arr[0])
  return result
}
  console.log(largestNumb(array))

