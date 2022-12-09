
export default async function PostsPage() {

const response = await fetch("https://jsonplaceholder.typicode.com/posts")

  const posts = await response.json()

  return (
    <div>
      <h2>postspage</h2>
      <pre>{JSON.stringify(posts, null, 2)} 
      </pre>
    </div>
  )
}
