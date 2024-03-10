import { useState } from "react"
import UserContext from "./UserContext"

const UserContextProvider = ({children}) =>{
    const [userName, setUserName] = useState(null);
    return(
        <UserContext.Provider value={{userName,setUserName}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;