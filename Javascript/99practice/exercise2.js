// discount-calculator
function calculatorDiscount (price) {
  discount = 0.20
  console.log(price * (1 - discount))
}
calculatorDiscount(5000)

// tax-calculator.js
function calculatorTax(price) {
  discount = 0.05
  console.log(price * (1 + discount))
}
calculatorTax(5000)


// checkout
let itemPrice = 100
let discountedPrice = calculatorDiscount(itemPrice)
console.log("After Discount:", discountedPrice)


// Later in the code 
let taxPrice = calculatorTax(itemPrice)
console.log("With Tax:", taxPrice)

// But now if we call calculateDiscount again:
let newPrice = calculatorDiscount(200)
console.log("bug! Expected 160, got:", newPrice)
