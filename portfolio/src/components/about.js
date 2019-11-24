import "./about.css";

import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Brian Loveless</h1>
        <div className="intro">
          <img
            className="responsive myface"
            src={require("./images/smilepicBL.jpeg")}
            alt="brian wearing a beatles tie and smiling with a blue collared shirt . He looks quite employable"
          />
          <div className="intro1">
            <h2 className="h2top">Greetings</h2>
            <p>I am A Junior Software Engineer.</p>
            <p>Languges: HTML, SQL, CSS, JAVASCRIPT, PYTHON3, BASH, ZSH.</p>
            <p>
              Frameworks, Middleware, & Libraries: EXPRESS, NODE, REACT, DJANGO,
              POSTGRESQL, HANDLEBARS, MONGOOSE, MONGO DB, PYGAME, LODASH, CORS,
              AJAX, NODE-MON, BODY-PARSER, MOCHA, CHAI, SUPER TEST, JEST,
              ENZYME, REACT HOOKS, I PYTHON .
            </p>
            <p>
              Skills: FRONT-END, BACK-END, PROGRAMMING, API'S, UX/UI DESIGN,
              FULL STACK, SITE CREATION, PROJECT LAUNCHES.
            </p>
            <p>Yes, those are Beatles on my tie.</p>
          </div>
        </div>
      </div>
    );
  }
}
