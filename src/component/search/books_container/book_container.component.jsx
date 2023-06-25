import { Fragment } from "react"
import {Link} from "react-router-dom"
import "./book_container.style.scss"
// import star from '../../../assests/icons/star.png'

const BookContainer=(props)=>{
    const { img_url, title, author, rating, description } = props
    
    const ratingFun = (star) => {
        if (star == 1) {
            return
        }
    }
    return (
        <Fragment>
            <div className="book_main_container">
                <div className="book_image">
                    <img src={img_url} alt="" />
                </div>
                <div className="title" content="jaklfa">
                    {title}
                </div>
                <div className="author">{ author}</div>
                <div className="rating">{rating}
                    {ratingFun(rating)
                    }</div>
                <div className="description">{description}</div>
                <div className="read_more"> <Link>read more &rarr;</Link></div>
            </div>
        </Fragment>
    )
}

export default BookContainer