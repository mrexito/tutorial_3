//https://www.youtube.com/watch?v=gMB8Uk8iOXI

async function getPostById(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 10 }
  })
  const post = await response.json()
  return post
  
}
export default async function PostWithIdPage({ params, searchparams }) {
  const post = await getPostById(params.id)


  return (
    <div>
      PostWithIdPage
      <pre>{ JSON.stringify(post,null,2)}</pre>
    </div>
  )
}

