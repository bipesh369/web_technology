const user = {
  name:"BipeshJunior",
  age:21,
  city:"Nepalgunj"
}

const update = {
  ...user,
  age:22
}
const {name, age, city} = update

console.log(name, age, city)
