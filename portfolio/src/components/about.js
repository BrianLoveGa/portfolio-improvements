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
            <p>I am a Full Stack Software Engineer with Talent Path in Atlanta, Ga.</p>
            <p>Languages: JAVASCRIPT, PYTHON, JAVA, HTML, CSS, SQL.</p>
            <p>
              Frameworks / Libraries: Express, Node, React, Django,
              PostgreSQL, SQLite3, Handlebars, Mongoose, Mongo DB, Cors,
              Mocha, Chai, SpringBoot, Angular, Jest.
            </p>
            <p>
              Skills: FRONT-END, BACK-END, PROGRAMMING, API'S, UX/UI DESIGN,
              FULL STACK, SITE CREATION, PROJECT LAUNCHES, VERSION CONTROL,
              AGILE, GOOGLE CLOUD, AMAZON WEB SERVICES, VIRTUAL MACHINES.
            </p>
            <p>Yes, those are Beatles on my tie.</p>
          </div>
        </div>
      </div>
    );
  }
}
