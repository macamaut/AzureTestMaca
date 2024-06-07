import PostsAPI from "@/lib/api/Posts"
import Post from "@/components/Post"

export default function Home({ posts }) {


  return (
    <div>
      <h1>Home Site</h1>
      {
        posts.map((post) => {
          return (
            <div key={`post-${post.id}`}>
              <Post props={post} />
            </div>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const posts = await PostsAPI.readAll()
  return {
    props: { posts }, revalidate: 1
  }
}