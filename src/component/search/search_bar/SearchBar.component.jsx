import { Fragment } from "react"
import search from '../../../assests/icons/search.png'
import remove from '../../../assests/icons/cross.png'
import './SearchBar.style.scss'
import {Link} from "react-router-dom"

const SearchBar = () => {

    const searchfun = () => {
        
    }
    
    return (
        <Fragment>
            <div className="searchbar-main-container">
                <div className="searchbar-inner-container">
                    <Link className="search_icon" onClick={searchfun}>
                        <img src={search} alt="" />
                    </Link>
                    <input type="text" placeholder="Search a Book" />
                    <Link className="crosss">
                        <img src={remove} alt="" />
                    </Link>
                    </div>
            </div>
        </Fragment>
    )
}


export default SearchBar