import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

import React from "react";
import Slider from "react-slick";

export default class Proj1Slides extends React.Component {
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
                src={require("./images/projs/proj1/simple1.png")}
                alt="Simple > Complex site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj1/simple2.png")}
                alt="Simple > Complex site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj1/simple3.png")}
                alt="Simple > Complex site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj1/simple4.png")}
                alt="Simple > Complex site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj1/simple5.png")}
                alt="Simple > Complex site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj1/simple6.png")}
                alt="Simple > Complex site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj1/simple7.png")}
                alt="Simple > Complex site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj1/simple8.png")}
                alt="Simple > Complex site"
              />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
