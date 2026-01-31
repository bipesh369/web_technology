// E-commerce side 

const myCart = ["Rice", "Phone", "Book", "Oil"];

// now:- electronics department replace phone and placed ipad.
 
const phoneIndex = myCart.findIndex(item => item === 'Phone');

const updatedCart =[
    
 ...myCart.slice(0, phoneIndex),
 "ipad",
 ...myCart.slice(phoneIndex + 1),

];

console.log(updatedCart)

//  ["Rice", "ipad", "Book", "Oil"]  -expected output. 

