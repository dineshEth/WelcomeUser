// import { useRef } from "react";

import { useState } from "react"
import UserContextProvider from "./Context/UserContextProvider"
import { RegisterForm } from "./component/RegisterForm"
import Profile from "./component/Profile"


function App() {
  return (

    <UserContextProvider>
      <div className="h-screen bg-[#1a0931] flex flex-col  justify-start items-center">
        <h1 className="p-2 my-10 text-3xl text-[64px] text-[#2072aa] text-center font-extrabold shadow-2xl">Context API</h1>
        <RegisterForm />
        <Profile />
      </div>
        
    </UserContextProvider>
  )
}

export default App
