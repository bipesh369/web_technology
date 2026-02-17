const nums = [1,2,2,3,3,3,4]

const count = nums
.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1
  return acc
}, {})

console.log(count)

// Mind Map
/*

| Start | — | Initial Value provided at the end: {} | {} |
| 1 | 1 | Is 1 in the object? No. So 0 + 1. | { 1: 1 } |
| 2 | 2 | Is 2 in the object? No. So 0 + 1. | { 1: 1, 2: 1 } |
| 3 | 2 | Is 2 in the object? Yes (1). So 1 + 1. | { 1: 1, 2: 2 } |
| 4 | 3 | Is 3 in the object? No. So 0 + 1. | { 1: 1, 2: 2, 3: 1 } |
| 5 | 3 | Is 3 in the object? Yes (1). So 1 + 1. | { 1: 1, 2: 2, 3: 2 } |
| 6 | 3 | Is 3 in the object? Yes (2). So 2 + 1. | { 1: 1, 2: 2, 3: 3 } |
| 7 | 4 | Is 4 in the object? No. So 0 + 1. | { 1: 1, 2: 2, 3: 3, 4: 1 } |

*/