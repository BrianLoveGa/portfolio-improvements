import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";
import React, { Component } from "react";
import SimpleSlider from "./slickslides";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="h1home">Welcome Friends</h1>
        <h4>Here you can learn about me</h4>
        <div className="me">
          <img
            src={require("./images/azoom.png")}
            className="smallpic"
            height="200"
            width="200"
            alt="face of Brian Loveless"
          />
          <div className="stack">
            <ul className="list">
              <li className="big">Fun Facts:</li>
              {/* skip a line in an ul or ol with this */}
              <li>&nbsp;</li>
              {/* skip a line in an ul or ol with this */}
              <li>Recent Graduate of </li>
              <li>General Assembly</li>
              <li>Software Engineering Immersion</li>
              <li>&nbsp;</li>
              <li>BS in B Admin From GSU</li>
              <li>&nbsp;</li>
              <li>I enjoy gaming on my X-box One</li>
              <li>I've been to Paris twice</li>
              <li>I collect nutcrackers</li>
              <li>I enjoy Disc-Golf</li>
            </ul>
          </div>
        </div>
        <h4 className="homeMid">View my digital business card</h4>
        <h5>Linkedin || Resume || GitHub || YouTube || more</h5>
        <h4 className="homeMid2">Explore some of my projects</h4>
        <SimpleSlider />

        <h4 className="homeMid3">And more coming soon</h4>
      </div>
    );
  }
}
