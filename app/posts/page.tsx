import Link from "next/link";

export default async function PostsPage() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts")

  const posts = await response.json()

  if (posts.length > 0) {
    throw new Error("Vow we have some posts...")
  }

  return (
    <div>
      <h2>posts Page</h2>
      {posts.map(post => {
        return <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link>
        </div>;
      })}
    </div>
  )
}
