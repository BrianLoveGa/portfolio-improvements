import "./codecamp.css";

import React, { Component } from "react";

export default class Codecamp extends Component {
  render() {
    return (
      <div className="codecampbox">
        <h2>Free Code Camp Projects here</h2>
        <h3>
          To keep my skills razor sharp I am going through the free code camp
          site
        </h3>
        <br></br>
        <h3>Code camp homepage link holder</h3>
        <h3>my code camp profile link holder</h3>
        <div className="proj1_box">
          <h3>First project for responsive web design</h3>
          <h3>"make a tribute page" via code pen</h3>
          <img
            class="ccproj1"
            src={require("./images/projs/codecamp/HST-tribute.png")}
            alt="Hunter S Thompson face close up with classic yellow shades"
          ></img>
          <h3>Link to completed project page on code pen holder</h3>
        </div>
      </div>
    );}}

