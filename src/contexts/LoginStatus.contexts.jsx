import { useState, createContext } from "react";

const StatusContext = createContext({
    first:""
})


const StatusContextProvider =  ({ children }) =>{
    
    const [loginStatus, setLoginStatus] = useState()
    return (
        <StatusContext.Provider value={{loginStatus,setLoginStatus}}>
            {children}
        </StatusContext.Provider>
    )
}

export {StatusContext,StatusContextProvider}