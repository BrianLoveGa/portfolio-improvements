import "./codecamp.css";

import React, { Component } from "react";

export default class Codecamp extends Component {
  render() {
    return (
      <div className="codecampbox">
        <h2>Free Code Camp Projects here</h2>
        <div className="pad"></div>
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
            alt="Hunter S Thompson tribute page on code pen"
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
          <h3>
            {" "}
            I made it where you can email me the data. <br />
            So, if you feel strongly about the survey, <br />
            please fill it out and send me the info.
          </h3>
          <img
            class="ccproj1"
            src={require("./images/projs/codecamp/Car-Survey.png")}
            alt="Car survey form on code pen"
          ></img>
          <h3>
            Link to completed project page{" "}
            <a
              href="https://codepen.io/B-code-Loveless/pen/rNaNQxL?editors=1000"
              target="_blank"
              rel="noopener noreferrer"
            >
              avaliable here{" "}
            </a>{" "}
            on code pen site.
          </h3>
        </div>
        <div className="proj1_box">
          <h3>Third project for responsive web design</h3>
          <h3>"make a product landing page" via code pen</h3>
          <h3>I made it for my fake sprockets company instead of trombones.</h3>
          <img
            class="ccproj1"
            src={require("./images/projs/codecamp/Sprocket.png")}
            alt="Brian's Best Sprockets product page on code pen"
          ></img>
          <h3>
            Link to completed project page{" "}
            <a
              href="https://codepen.io/B-code-Loveless/pen/VwYwqOv?editors=1100"
              target="_blank"
              rel="noopener noreferrer"
            >
              avaliable here{" "}
            </a>{" "}
            on code pen site.
          </h3>
        </div>
        <div className="proj1_box">
          <h3>Fourth project for responsive web design</h3>
          <h3>"make a technical documentation page" via code pen</h3>
          <h3> I made it with bacon!</h3>
          <img
            class="ccproj1"
            src={require("./images/projs/codecamp/Bacon.png")}
            alt="Bacon tech documentation page on code pen"
          ></img>
          <h3>
            Link to completed project page{" "}
            <a
              href="https://codepen.io/B-code-Loveless/pen/LYEEQWV"
              target="_blank"
              rel="noopener noreferrer"
            >
              avaliable here{" "}
            </a>{" "}
            on code pen site. <br />
          </h3>
        </div>
        <div className="proj1_box">
          <h3>Final project for responsive web design</h3>
          <h3>"make a portfolio page" via code pen</h3>
          <h3> Didn't style much since I have 3 live portfolios already</h3>
          <img
            class="ccproj1"
            src={require("./images/projs/codecamp/fcc-port.png")}
            alt="Free code camp portfolio  page on code pen"
          ></img>
          <h3>
            Link{" "}
            <a
              href="https://codepen.io/B-code-Loveless/pen/dyPMweV"
              target="_blank"
              rel="noopener noreferrer"
            >
              avaliable here{" "}
            </a>{" "}
            on code pen site. <br />
          </h3>
        </div>
      </div>
    );
  }
}
