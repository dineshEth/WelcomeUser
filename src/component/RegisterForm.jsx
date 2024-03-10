import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

export const RegisterForm = () => {
    const {userName, setUserName} = useContext(UserContext);
    const [user, setUser] = useState('');
    const handleUpdate = (e) =>{
        e.preventDefault();
        setUserName(user); 
        setUser(''); 
    }
  return (
    <div className='text-[64px]  text-center font-extrabold shadow-2xl'>
        <input required placeholder='Ravi..' className='px-2 outline-none border-[1px] text-pink-600 border-pink-600 bg-transparent' type="text" value={user} onChange={(e)=>setUser(e.target.value)}  />
        <button onClick={user && handleUpdate} className='px-4 border-[1px] border-pink-600 text-[64px] text-[#1a0931] bg-pink-600 text-center font-extrabold shadow-2xl '>Update</button>
    </div>
  )
}
