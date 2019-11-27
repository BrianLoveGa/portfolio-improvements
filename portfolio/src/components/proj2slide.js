import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

import React from "react";
import Slider from "react-slick";

export default class Proj2Slides extends React.Component {
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
                src={require("./images/projs/proj2/dz1.png")}
                alt="Dang Good Desserts Zone"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj2/dz2.png")}
                alt="Dang Good Desserts Zone"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj2/dz3.png")}
                alt="Dang Good Desserts Zone"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj2/dz4.png")}
                alt="Dang Good Desserts Zone"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj2/dz5.png")}
                alt="Dang Good Desserts Zone"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj2/dz6.png")}
                alt="Dang Good Desserts Zone"
              />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
