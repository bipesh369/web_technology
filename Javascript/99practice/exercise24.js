async function getUsers() {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    
    const users = data.map(user => {
      const { name, email, company: {name: companyName}} = user
      return `Name: ${name}, Email: ${email}, Company: ${companyName}`
    })

    // join with a newline to print them line by line
    console.log(users.join('\n'))
  } catch(error){
    console.log("Failed to fetch users:", error)
  }
}

getUsers()