const user = [
 {name:"A", age:17},
 {name:"B", age:22},
 {name:"C", age:30}
]
const result =  
user.filter(u => u.age >= 18)
.map(u => u.name)

console.log(result)