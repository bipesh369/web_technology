const initialState = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 }
];

// add
const newItem = {id: 3, name: "Tablet", price: 300}
const addedState = [...initialState, newItem]
console.log(addedState)

// remove
const idToTRemove = 1
const removeState = initialState.filter(item => item.id !== idToTRemove)
console.log(removeState)

// update
const isToUpdate = 2
const newPrice = 500

const updateState = initialState.map(item => {
  if(item.id === isToUpdate) {
    //return a new price 
    return {...item, price: newPrice}
  }
  return item
})

console.log((updateState))