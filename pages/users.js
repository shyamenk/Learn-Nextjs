import React from 'react'
import User from '../components/user'

const UserList = ({users}) => {
  return (
    <>
      <h1>LIST OF USERS</h1>
      {users.map(user => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  )
}

export default UserList

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props: {
      users,
    },
  }
}
