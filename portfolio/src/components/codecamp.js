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
        <div className="campbox">
          <h3>
            Code camp homepage{" "}
            <a
              href="https://www.freecodecamp.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              link here{" "}
            </a>{" "}
            to their site.
          </h3>
          <h3>
            To see my code camp profile{" "}
            <a
              href="https://www.freecodecamp.org/fcc834d7277-a991-4083-bda5-6372b69a9f1e"
              target="_blank"
              rel="noopener noreferrer"
            >
              click here{" "}
            </a>{" "}
            to go there.
          </h3>
        </div>

        <div className="proj1_box">
          <h3>First project for responsive web design</h3>
          <h3>"make a tribute page" via code pen</h3>
          <img
            class="ccproj1"
            src={require("./images/projs/codecamp/HST-tribute.png")}
            alt="Hunter S Thompson face close up with classic yellow shades"
          ></img>
          <h3>
            Link to completed project page{" "}
            <a
              href="https://codepen.io/B-code-Loveless/pen/abzbyQr?editors=1100"
              target="_blank"
              rel="noopener noreferrer"
            >
              avaliable here{" "}
            </a>{" "}
            on code pen site.
          </h3>
        </div>
        <div className="proj1_box">
          <h3>Second project for responsive web design</h3>
          <h3>"make a survey page" via code pen</h3>
          <img
            class="ccproj1"
            // src={require("./images/projs/codecamp/#")}
            alt="Hunter S Thompson face close up with classic yellow shades"
          ></img>
          <h3>
            Link to completed project page{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              avaliable here{" "}
            </a>{" "}
            on code pen site.
          </h3>
        </div>
      </div>
    );}}

