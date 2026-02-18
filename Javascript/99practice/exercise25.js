async function posts() {
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()

    const result = data
    .filter(({userId}) => userId === 1)
    .map(({title}) => title)

    console.log("Titles for userid 1: ")
    console.log(result)

  } catch(error){
    console.log("Failed to fetch data", error)
  }
  
}

posts()