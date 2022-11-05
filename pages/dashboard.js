import {useState, UseEffect, useEffect} from 'react'

const Dashboard = () => {
  const [isLoading, setisLoading] = useState(true)
  const [dashboardData, setdashboardData] = useState(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard')
      const data = await response.json()
      // console.log(data)

      setdashboardData(data)
      setisLoading(false)
    }

    fetchDashboardData()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h1>Dashboard Analytics</h1>
      <h2>Posts: {dashboardData?.posts}</h2>
      <h2>Likes: {dashboardData?.likes}</h2>
      <h2>Followers: {dashboardData?.followers}</h2>
      <h2>Following:{dashboardData?.following}</h2>
    </>
  )
}

export default Dashboard
