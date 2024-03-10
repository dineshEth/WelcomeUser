import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
    const {userName}  = useContext(UserContext);
  return (
    <div className='px-4 py-2 text-[64px] text-pink-600 text-center font-extrabold shadow-2xl'>{userName ? `Welcome ${userName.toUpperCase()}` : 'SET USERNAME'}</div>
  )
}

export default Profile