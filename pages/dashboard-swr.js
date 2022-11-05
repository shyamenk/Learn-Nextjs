import useSwr from 'swr'

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard')
  const data = await response.json()
  return data
}
const DashboardWithSwr = () => {
  const {data, error} = useSwr('dashboard', fetcher)

  if (error) {
    return <h1>Error Occured While fetching Data</h1>
  }

  if (!data) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      <h1>Dashboard Analytics</h1>
      <h2>Posts: {data.posts}</h2>
      <h2>Likes: {data.likes}</h2>
      <h2>Followers: {data.followers}</h2>
      <h2>Following:{data.following}</h2>
    </>
  )
}

export default DashboardWithSwr
