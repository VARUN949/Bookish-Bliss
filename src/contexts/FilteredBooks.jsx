import { useState,createContext } from "react";

const FilteredBooksContext = createContext({})

const FilterBooksProvider = ({ children })=> {
    const [filterbooks, setfilterbooks] = useState([])
    return (
        <FilteredBooksContext.Provider value={{filterbooks,setfilterbooks}}>
            {children}
        </FilteredBooksContext.Provider>
    )
}

export {FilteredBooksContext,FilterBooksProvider}