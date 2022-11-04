import Link from 'next/link'

const PostList = ({posts}) => {
  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>
          <hr></hr>
        </div>
      ))}
    </>
  )
}

export default PostList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  return {
    props: {
      posts: posts.slice(0, 3),
    },
  }
}
