const Post = ({post}) => {
  return (
    <>
      <h1>Post</h1>
      <h2>
        {post.id}
        {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  )
}

export default Post

export async function getStaticPaths({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const posts = await response.json()
  // const paths = posts.map(post => ({
  //   params: {postId: post.id.toString()},
  // }))

  const paths = posts.map(post => ({
    params: {postId: post.id.toString()},
  }))

  return {paths, fallback: false}
}

export async function getStaticProps({params}) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`,
  )

  const post = await response.json()

  return {
    props: {
      post,
    },
  }
}
