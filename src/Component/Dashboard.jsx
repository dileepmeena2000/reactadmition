import React from "react";
import Course from "./Course";
import Header from "./Header";
import Footer from "./Footer";

function Dashboard() {
  return (
    <>
    <Header/>
      {/* <!-- carousel --> */}
      <section id="carousel">
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"
                    aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"
                    className=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"
                    className=""></button>
            </div> 

          <div className="carousel-inner">
            {/* <!-- item-1 --> */}
            <div className="carousel-item active" data-bs-interval="4000">
              <img
                className="carouselHeight"
                src="./Images/CampusImage-1.avif"
                alt="Campus Image-1"
                width="100%"
              />
            </div>

            {/* <!-- item-2 --> */}
            <div className="carousel-item" data-bs-interval="2000">
              <img
                className="carouselHeight"
                src="./Images/CampusImage-2.avif"
                alt="Campus Image-2"
                width="100%"
              />
            </div>

            {/* <!-- item-3 --> */}
            <div className="carousel-item" data-bs-interval="2000">
              <img
                className="carouselHeight"
                src="./Images/CampusImage-3.jpeg"
                alt="Campus Image-3"
                width="100%"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* <!-- End Carousel --> */}
      <Course/>
    </>
  );
}

export default Dashboard;
