const electronics = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 },
  { name: "USB Cable", price: 10 }
];

// total price of products
const totalPrice = electronics.reduce((sum, item) => sum + item.price, 0)
console.log(totalPrice)

// products above 100
const productAbove = electronics.filter(item => item.price > 100)
console.log(productAbove)

// Names Array 
const arrayOfString = electronics.map(product => product.name)
console.log(arrayOfString)