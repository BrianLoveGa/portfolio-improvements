import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

import React from "react";
import Slider from "react-slick";

export default class Proj3Slides extends React.Component {
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
                src={require("./images/projs/proj3/rock1.png")}
                alt="Rock Paper Scissors Lizard Spock site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj3/rock2.png")}
                alt="Rock Paper Scissors Lizard Spock site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj3/rock3.png")}
                alt="Rock Paper Scissors Lizard Spock site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj3/rock4.png")}
                alt="Rock Paper Scissors Lizard Spock site"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj3/rock5.png")}
                alt="Rock Paper Scissors Lizard Spock site"
              />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
