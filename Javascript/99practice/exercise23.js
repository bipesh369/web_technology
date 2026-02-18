async function getTitle() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()
  const titles = data.map(title => title.title)
  console.log(titles)
  
}

getTitle()