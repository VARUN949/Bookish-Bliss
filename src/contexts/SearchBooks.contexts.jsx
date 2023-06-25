import { useState, createContext } from "react";

const SearchStringContex = createContext()

const SearchStringContexPorvider = ({ children })=> {
    const [searchString, setsearchString] = useState("")
    
    return (
        <SearchStringContex.Provider value={{ searchString, setsearchString }}>
            {children}
        </SearchStringContex.Provider>
    )
}

export { SearchStringContex,SearchStringContexPorvider}