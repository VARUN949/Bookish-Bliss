import { Fragment, useEffect, useContext,useState } from "react";
import BookContainer from "../search/books_container/book_container.component";
import SearchBar from "../search/search_bar/SearchBar.component";
import "./searchPage.style.scss";
import { SearchStringContex } from "../../contexts/SearchBooks.contexts";
import { FilteredBooksContext } from "../../contexts/FilteredBooks";

const SearchPage = () => {
  const { searchString } = useContext(SearchStringContex);
    const { filterbooks, setfilterbooks } = useContext(FilteredBooksContext);
    const API_key = "AIzaSyD5layWLDIyLRvfLAR-Berg5JyW6aIOc_E"
     let tempObj=[];
    const [book_list, setbook_list] = useState([])

    const filter = async (data) => {
        let bookObj = {
            title: data.title,
            author: data.authors,
            description: data.description,
            rating: data.averageRating,
            img_url:data.imageLinks.smallThumbnail
      }
        tempObj.push(bookObj)
    }


    const creating_list= async () => {
        let temp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchString}+intitle&maxResults=20&key=${API_key}`)
        const json_books = await temp.json()
        console.log(json_books.totalItems)
      if (json_books.totalItems > 0) {
        json_books.items.map((book) => {
          // console.log()
          if (book.volumeInfo.title && book.volumeInfo.imageLinks) {
            filter(book.volumeInfo)
          }
         
          })
      }
     
      setbook_list(tempObj)
      console.log(book_list)
            //     let json_book = await book.json()
            // console.log(json_books.docs[1].key)
            
        
    }


    useEffect(() => {
        creating_list()
        console.log(searchString)
  }, [searchString]);

  return (
      <Fragment >
      <div className="search_bar">
        <SearchBar />
      </div>
          <div className="bookcontainer">
              
        {book_list.map((item) => {
                            return (
                    <div className="bookcontainer_inner">
                    <BookContainer img_url={item.img_url} title={item.title} author={item.author} rating={item.rating} description={item.description} />
                  </div>
                );
        })}
      </div>
    </Fragment>
  );
};

export default SearchPage;
