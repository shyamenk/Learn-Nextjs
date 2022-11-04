import Link from 'next/link'

const Home = () => {
  return (
    <>
      <h1>Next js Pre-rendering</h1>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
    </>
  )
}

export default Home
