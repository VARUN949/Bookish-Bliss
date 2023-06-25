import { Fragment } from "react"
import {Link} from "react-router-dom"
import "./book_container.style.scss"

const BookContainer=(props)=>{
    const { img_url, title, author, rating, description } = props
    
    const ratingFun = (star) => {
        if (star === 0.5 || star===1 || star===0) {
            console.log("hello")
            return (
                <div className="star">
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                </div>
                )
        }
        else if (star ===1.5 || star===2) {
            console.log("hello")
            return (
                <div className="star">
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                </div>
                )
        }
        else if (star === 2.5 || star===3) {
            console.log("hello")
            return (
                <div className="star">
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                </div>
                )
        }
        else if (star === 3.5 || star===4) {
            console.log("hello")
            return (
                <div className="star">
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                </div>
                )
        }
        else if (star === 4 || star===4.5) {
            console.log("hello")
            return (
                <div className="star">
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                    <img src={require('../../../assests/icons/star.png')} alt="" />
                </div>
                )
        }
        else {
            console.log("hello")
            return (
                <div className="star">
                    No rating founded
                </div>
                )
        }
        

    }

    const authorfun = (author) => {
        if (author) {
            return author
        }
        else {
            return "no author founded"
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
                <div className="author">{ authorfun(author)}</div>
                <div className="rating">{ratingFun(rating)}</div>
                <div className="description">{description}</div>
                <div className="read_more"> <Link>read more &rarr;</Link></div>
            </div>
        </Fragment>
    )
}

export default BookContainer