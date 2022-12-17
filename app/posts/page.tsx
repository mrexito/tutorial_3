import Link from "next/link";
import { notFound } from "next/navigation"
import styles from "../page.module.css"
import PostTitleLink from "./[id]/PostTitleLink";

export default async function PostsPage() {

  const response = await fetch("https://jsonplaceholder.typicode.com/posts")

  const posts = await response.json()

    /*
  if (posts.length > 0) {
    //throw new Error("Vow we have some posts...")
    notFound()
  }
  */
  return (
    <div>
      <h2 className={styles.bgRed}>posts Page</h2>
      {posts.map(post => (
        <PostTitleLink post = { post } key = { post.id } />
        )
      )}
    </div>
  )
}
