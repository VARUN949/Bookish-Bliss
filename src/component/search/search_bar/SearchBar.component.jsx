import { Fragment, useContext } from "react";
import search from "../../../assests/icons/search.png";
import remove from "../../../assests/icons/cross.png";
import "./SearchBar.style.scss";
import { Link } from "react-router-dom";
import { SearchStringContex } from "../../../contexts/SearchBooks.contexts";

const SearchBar = () => {
  const { setsearchString } = useContext(SearchStringContex);

  const searchChanger = async (event) => {
    setsearchString(event.target.value);
  };

  return (
    <Fragment>
      <div className="searchbar-main-container">
        <div className="searchbar-inner-container">
          <Link className="search_icon">
            <img src={search} alt="" />
          </Link>
          <input
            type="text"
            placeholder="Search a Book"
            onChange={searchChanger}
          />
          <Link className="crosss">
            <img src={remove} alt="" />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
