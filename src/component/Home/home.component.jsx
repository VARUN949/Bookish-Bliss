import "./home.style.scss";
import library_image from "../../assests/library.jpg";
import girl_reading from "../../assests/girl-reading.gif";
import { Fragment } from "react";
import book from "../../assests/book.gif";

const Home = () => {
  return (
    <Fragment>
      <div className="home-main-container">
        <div className="home-left-part">
          <div className="first-box">
            <img src={library_image} alt="" />
          </div>

          <div className="second-box">
            <div>
              <div className="first-line">Welcome to Grand</div>
              <div className="second-line">Bookish Bliss Library</div>
              <div className="third-line">
                A book is a dream that you hold in your hand.
              </div>
            </div>
            <button>Find a Book</button>
          </div>
        </div>
        <div className="home-right-part">
          <div className="first-gif">
            <img src={girl_reading} alt="" />
          </div>
          <div className="second-gif">
            <img src={book} alt="" />
                  </div>
            
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
