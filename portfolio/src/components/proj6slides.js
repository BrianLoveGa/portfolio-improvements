import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

import React from "react";
import Slider from "react-slick";

export default class Proj6Slides extends React.Component {
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
                src={require("./images/projs/proj6/football.png")}
                alt="Brian's Super Big Game Trivia"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj6/football1.png")}
                alt="Brian's Super Big Game Trivia"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj6/football2.png")}
                alt="Brian's Super Big Game Trivia"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj6/football3.png")}
                alt="Brian's Super Big Game Trivia"
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="slides"
                src={require("./images/projs/proj6/football4.png")}
                alt="Brian's Super Big Game Trivia"
              />
            </h3>
          </div>
        </Slider>
      </div>
    );
  }
}
