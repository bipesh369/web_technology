console.log(null > 0);
console.log(null == 0); // never use this type of comparision
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);  // avoid all this type of comparision



//There are two families of comparison:

//Loose comparison → ==
// "" == 0        // true
// false == 0    // true
// null == undefined // true
// null == undefined   // true
// NaN == NaN  // false

//Strict comparison → ===
// === asks two questions:
// Same value?
// Same type?
// "5" === 5   // false
// 5 === 5     // true
// null === undefined // false
// NaN === NaN // false // Because NaN means “not equal to anything, including itself”.

//Everything confusing comes from mixing these two.

// Objects and arrays (common trap)
// [] == []   // false
// {} == {}   // false
// Because objects are compared by reference, not value.

// Real-world example (React bug classic)
// if (items.length == 0) {
//   // empty
// }
// Works… until length is "0".

// Correct:
// if (items.length === 0) {
//   // empty
// }
// Now it’s bulletproof.

