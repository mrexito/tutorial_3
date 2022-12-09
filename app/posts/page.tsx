import Link from "next/link";

export default async function PostsPage() {

const response = await fetch("https://jsonplaceholder.typicode.com/posts")

  const posts = await response.json()

  return (
    <div>
      <h2>postspage</h2>
      {posts.map(post => {
        return <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.id} {post.title}</Link>
        </div>;
      })}
    </div>
  )
}
