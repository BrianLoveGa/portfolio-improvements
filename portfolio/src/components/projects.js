import "./projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Proj1Slides from "./proj1slide";
import Proj2Slides from "./proj2slide";
import Proj3Slides from "./proj3slide";
import Proj4Slides from "./proj4slide";

export default class Projects extends Component {
  render() {
    return (
      <div className="projpage">
        <h1>My Projects </h1>
        <h3>All sites are mobile friendly </h3>
        <h3>click the link under the slideshow </h3>
        <div className="projectsbox">
          <div className="project">
            <h1> Project 1 </h1>
            <h2> Simple > Complex </h2>
            <div className="projPic">
              <Proj1Slides />
            </div>
            <p>
              Where I created a simple game in Pyhton3 and the same game in a
              JavaScript prompts version to compare and contrast them. Also a
              React buttons and prompts version. The plan is to take this simple
              template and grow it into something more entertaining. You can
              also check the weather, and look at random dog pics.
            </p>
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://brianlovega.github.io/proj4-simple-over-complex/"
            >
              Visit Simple > Complex here
            </a>
          </div>
          <div className="project">
            <h1> Project 2 </h1>
            <h2> Dang Good Desserts Zone </h2>
            <div className="projPic">
              <Proj2Slides />
            </div>
            <p>
              {" "}
              A group project where we wanted to create an essy to use site
              where recipies could be easily shared. Heroku deployed MongoDB
              backend and a React front-end via Github pages with RESTful routes
              and full CRUD (create read update delete). MERN stack (mongoose,
              express, react, node).
            </p>
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://esin87.github.io/ga-seir-project3-frontend/"
            >
              Share a recipie here
            </a>
          </div>
          <div className="project">
            <h1> Project 3 </h1>
            <h2> Rock Paper Scissors Lizard Spock </h2>
            <div className="projPic">
              <Proj3Slides />
            </div>
            <p>
              A fun game to pass the time. Play rock paper scissors against the
              computer. Just press the button enter your move and feel the glory
              of victory, or the sting of defeat.{" "}
            </p>
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://brianlovega.github.io/game-rock-paper-scissors/"
            >
              Play the RPSLS game here
            </a>
          </div>
          <div className="project">
            <h1> Project 4 </h1>
            <h2> Cool Links </h2>
            <div className="projPic">
              <Proj4Slides />
            </div>
            <p>
              An homage to the old school link pages. A site of pure CSS and
              HTML . Fun sites for new and old coders alike to check out.{" "}
            </p>
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://brianlovega.github.io/cool-LinksPage/"
            >
              Check it out here
            </a>
          </div>
        </div>
      </div>
    );
  }
}
