function outer(){
  let count = 0


return function(){
  count++
  console.log(count)
  return count
}
}

const tracker = outer()

tracker()
tracker()
tracker()