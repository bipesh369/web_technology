const carts =
      [{name:"Phone", price:100},
      {name:"Laptop", price:500},
      {name:"Mouse", price:50}]

const totalPrice = carts.reduce((total, item) => total + item.price, 0)
console.log(totalPrice)      