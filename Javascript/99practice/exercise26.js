async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json()
  
  const userPosts = posts
  .filter(({userId}) => userId === 1)
  .map(({title}) => title)

  console.log(userPosts)

  } catch(error){
    console.log("Error", error)
  }
}

getPosts()