import "./projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";
import React, { Component } from "react";
import Proj1Slides from "./proj1slide";
import Proj2Slides from "./proj2slide";
import Proj3Slides from "./proj3slide";
import Proj4Slides from "./proj4slide";
import Proj5Slides from "./proj5slide";
import Proj6Slides from "./proj6slides";

export default class Projects extends Component {
  render() {
    return (
      <div className="projpage">
        <h1 className="projtitle">My Projects </h1>
        <h3 className="slide">All sites are mobile friendly </h3>
        <h3 className="slide1">click the link under the slideshow </h3>

        <h3>
          <Link
            className="ccprojlink"
            to="/portfolio-improvements/projects/codecamp"
          >
            click here
          </Link>{" "}
          to see what I've been up to at Free code camp .com
        </h3>
        <div className="projectsbox">
          {" "}
          <div className="project">
            <h1> Project 1 </h1>
            <h2> Bob's Burgers Trivia </h2>
            <div className="projPic">
              <Proj5Slides />
            </div>
            <p>
              A fun game to test you knowledge of an amazing show. Play trivia
              quiz either of general show info or one themed to character
              knowledge. Either 'quiz' consists of 10 multiple choice questions.
              There are 5 different ending gifs depending on your score.{" "}
            </p>
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://brianlovega.github.io/bobs_burgers_trivia/"
            >
              Play the trivia game here
            </a>
            <br />
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/BrianLoveGa/bobs_burgers_trivia"
            >
              Code Repo for Bob's Burgers Trivia here
            </a>
          </div>
          <div className="project">
            <h1> Project 2 </h1>
            <h2> Super facts for the 'Big Game'</h2>
            <div className="projPic">
              <Proj6Slides />
            </div>
            <p>
              Where I created a page of trivia facts and info tid-bits relating
              to the 'Big Game' played on groundhog's day. Mobile friendly CSS,
              Html, and vanilla Javascript to show & hide the lines of info you
              can impress strangers, annoy friends or inform your family with.
            </p>
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://brianlovega.github.io/super-fun-facts/"
            >
              Visit Super Fun Facts
            </a>
            <br />
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/BrianLoveGa/super-fun-facts"
            >
              Code Repo for Super Facts
            </a>
          </div>
          <div className="project">
            <h1> Project 3 </h1>
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
            <br />
            <a
              className="plink"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/BrianLoveGa/proj4-simple-over-complex"
            >
              Code Repo for Simple > Complex here
            </a>
          </div>
        </div>
        <div className="project">
          <h1> Project 4 </h1>
          <h2> Dang Good Desserts Zone </h2>
          <div className="projPic">
            <Proj2Slides />
          </div>
          <p>
            {" "}
            A group project where we wanted to create an essy to use site where
            recipies could be easily shared. Heroku deployed MongoDB backend and
            a React front-end via Github pages with RESTful routes and full CRUD
            (create read update delete). MERN stack (mongoose, express, react,
            node).
          </p>
          <a
            className="plink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://esin87.github.io/ga-seir-project3-frontend/"
          >
            Share a recipie here
          </a>
          <br />
          <a
            className="plink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/esin87/ga-seir-project3-frontend"
          >
            Front end Code Repo here
          </a>
          <a
            className="plink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/esin87/ga-seir-project3"
          >
            Back end Code Repo here
          </a>
        </div>
        <div className="project">
          <h1> Project 5 </h1>
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
          <br />
          <a
            className="plink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/BrianLoveGa/game-rock-paper-scissors"
          >
            Code Repo for RPSLS here
          </a>
        </div>
        <div className="project">
          <h1> Project 6 </h1>
          <h2> Cool Links </h2>
          <div className="projPic">
            <Proj4Slides />
          </div>
          <p>
            An homage to the old school link pages. A site of pure CSS and HTML
            . Fun sites for new and old coders alike to check out.{" "}
          </p>
          <a
            className="plink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://brianlovega.github.io/cool-LinksPage/"
          >
            Check it out here
          </a>
          <br />
          <a
            className="plink"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/BrianLoveGa/cool-LinksPage"
          >
            Code Repo avaliable here
          </a>
        </div>
      </div>
    );
  }
}
