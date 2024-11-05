import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile () {
  const { user } = useContext(UserContext)

  if (!user) return <h3>Not logged in</h3>

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.username}</h2>
    </div>
  )
}

export default Profile
