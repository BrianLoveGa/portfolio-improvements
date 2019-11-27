import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

import React from "react";
import Slider from "react-slick";

export default class Proj4Slides extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 4000,
      centerMode: true,
      centerPadding: "10px",
      draggable: true,
      fade: true,
      pauseOnDotsHover: true,
      swipeToSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="showbox">
        <Slider {...settings}>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj4/linkx.jpg")}
                alt="Brian's Cool Links Site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj4/linkx1.png")}
                alt="Brian's Cool Links Site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj4/linkx2.png")}
                alt="Brian's Cool Links Site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj4/linkx3.png")}
                alt="Brian's Cool Links Site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj4/linkx4.png")}
                alt="Brian's Cool Links Site"
              />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
