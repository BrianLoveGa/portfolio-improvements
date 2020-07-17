import "./home.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

import Proj1Slides from "./proj1slide";
import Proj2Slides from "./proj2slide";
import Proj3Slides from "./proj3slide";
import Proj4Slides from "./proj4slide";
import Proj5Slides from "./proj5slide";
import Proj6Slides from "./proj6slides";
import Proj7Slides from "./proj7slides";

import About from "./about";
import BizCard from "./bizcard";
import Contact from "./contact";

export default class Home extends Component {
  render() {
    return (
      <div>
        <About />
        <BizCard />
        <Contact />

        <h4 className="homeMid3">stay tuned for more content soon</h4>
      </div>
    );
  }
}
