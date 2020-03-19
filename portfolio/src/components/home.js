import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./about.css";
import "./slideshow.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SimpleSlider from "./slickslides";
import Proj1Slides from "./proj1slide";
import Proj2Slides from "./proj2slide";
import Proj3Slides from "./proj3slide";
import Proj4Slides from "./proj4slide";
import Proj5Slides from "./proj5slide";
import Proj6Slides from "./proj6slides";
import Proj7Slides from "./proj7slides";
import ReactContactForm from "react-mail-form";
import pdf from "./images/Brianres.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faCalendarPlusPdf } from "@fortawesome/free-solid-svg-icons";
import "./projects.css";
import "./contact.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="h1home">Welcome Friends</h1>
        <h4 className="h4home">Here you can learn about me</h4>
        <div className="me">
          <img
            src={require("./images/azoom.png")}
            className="smallpic"
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
              <li>BS in Business Admin From GSU</li>
              <li>&nbsp;</li>
              <li>I enjoy gaming on my X-box One</li>
              <li>I've been to Paris twice</li>
              <li>I collect nutcrackers</li>
              <li>I enjoy Disc-Golf</li>
            </ul>
          </div>
        </div>
        <h3>
          Available for Web-site Creation, Application Development, App
          Launches, Site Deployment, UX, UI, Digital Consultation, Page Design,
          and more.
        </h3>
        <div className="biznessBoxMain">
          <h1 className="cntctcard">
            <a
              className="contactRES"
              download="Brian Loveless - Resume.pdf"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon className="bp" icon={faFilePdf} /> Resume
            </a>
          </h1>
          <h1>
            {" "}
            schedule a chat with me via{" "}
            <a
              className="contactRES"
              href="https://calendly.com/brian-loveless1/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* but it's me why can't I refer to my sites? */}
              Calendly <FontAwesomeIcon
                className="bp"
                icon={"calendar-plus"}
              />{" "}
              🗓 Link{" "}
            </a>{" "}
          </h1>
        </div>
        <div className="projpage">
          <h1>My Projects </h1>
          <h3>All sites are mobile friendly </h3>
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
              <h2> Pixel Art Live </h2>
              <div className="projPic">
                <Proj7Slides />
              </div>
              <p>
                A fun 'game' created with the Hasura GraphQl engine and Postgres
                API back-end on Heroku and a React on GutHub front-end. Users
                can click a square and change it's color. Utilizing web-sockets
                the pixel art will update for all visitors live worldwide.{" "}
              </p>
              <a
                className="plink"
                target="_blank"
                rel="noopener noreferrer"
                href="https://brianlovega.github.io/hasura-tutorial/"
              >
                Click up some art here
              </a>
              <br />
              <a
                className="plink"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/BrianLoveGa/hasura-tutorial"
              > Code Repo for Pixel Art Live here </a>
              
            </div>
            <div className="project">
              <h1> Project 2 </h1>
              <h2> Bob's Burgers Trivia </h2>
              <div className="projPic">
                <Proj5Slides />
              </div>
              <p>
                A fun game to test you knowledge of an amazing show. Play trivia
                quiz either of general show info or one themed to character
                knowledge. Either 'quiz' consists of 10 multiple choice
                questions. There are 5 different ending gifs depending on your
                score.{" "}
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
              <h1> Project 3 </h1>
              <h2> Super facts for the 'Big Game'</h2>
              <div className="projPic">
                <Proj6Slides />
              </div>
              <p>
                Where I created a page of trivia facts and info tid-bits
                relating to the 'Big Game' played on groundhog's day. Mobile
                friendly CSS, Html, and vanilla Javascript to show & hide the
                lines of info you can impress strangers, annoy friends or inform
                your family with.
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
              <h1> Project 4 </h1>
              <h2> Dang Good Desserts Zone </h2>
              <div className="projPic">
                <Proj2Slides />
              </div>
              <p>
                {" "}
                A group project where we wanted to create an essy to use site
                where recipies could be easily shared. Heroku deployed MongoDB
                backend and a React front-end via Github pages with RESTful
                routes and full CRUD (create read update delete). MERN stack
                (mongoose, express, react, node).
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
                A fun game to pass the time. Play rock paper scissors against
                the computer. Just press the button enter your move and feel the
                glory of victory, or the sting of defeat.{" "}
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
              <h2> Simple > Complex </h2>
              <div className="projPic">
                <Proj1Slides />
              </div>
              <p>
                Where I created a simple game in Pyhton3 and the same game in a
                JavaScript prompts version to compare and contrast them. Also a
                React buttons and prompts version. The plan is to take this
                simple template and grow it into something more entertaining.
                You can also check the weather, and look at random dog pics.
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
            <h1> Project 7 </h1>
            <h2> Cool Links </h2>
            <div className="projPic">
              <Proj4Slides />
            </div>
            <p>
              An homage to the old school link pages. A site of pure CSS and
              HTML. Fun sites for new and old coders alike to check out.{" "}
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
        <div className="proj-boxy">
          <h4 className="homeMid2">Explore more of my </h4>
          <Link className="homeMid2link" to="/portfolio-improvements/projects">
            projects in depth here
          </Link>

          <SimpleSlider />
        </div>
        <h4 className="homeMid">View my digital business card</h4>
        <h5>
          <Link className="homeMid1" to="/portfolio-improvements/biz">
            Linkedin || Resume || GitHub || YouTube || more
          </Link>
        </h5>
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
              <p>Languages: HTML, SQL, CSS, JAVASCRIPT, PYTHON3, BASH, ZSH.</p>
              <p>
                Frameworks, Middleware, & Libraries: EXPRESS, NODE, REACT,
                DJANGO, POSTGRESQL, HANDLEBARS, MONGOOSE, MONGO DB, PYGAME,
                LODASH, CORS, AJAX, NODE-MON, BODY-PARSER, MOCHA, CHAI, SUPER
                TEST, JEST, ENZYME, REACT HOOKS, I PYTHON .
              </p>
              <p>
                Skills: FRONT-END, BACK-END, PROGRAMMING, API'S, UX/UI DESIGN,
                FULL STACK, SITE CREATION, PROJECT LAUNCHES.
              </p>
              <p>Yes, those are Beatles on my tie.</p>
            </div>
          </div>
        </div>
        <div className="contactBox">
          <h1>Contact Brian Many Ways</h1>
          <div className="emailForm">
            <h2> G-mail / Email Me</h2>
            <ReactContactForm
              className="form"
              titleMaxLength="65"
              contentsMaxLength="400"
              buttonText="Send Brian an Email"
              to="brian.loveless1@gmail.com"
            />
          </div>
          <h3>Send a message via</h3>
          <h1 className="cntctcard">
            <a
              className="contactRES"
              href="https://www.linkedin.com/signup/public-profile-join?vieweeVanityName=brianloveless321bl&trk=public_profile_top-card-primary-button-join-to-connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                className="bp"
                src="data:image/png;base64,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"
                height="30px"
                width="30px"
                alt="linkedIn logo"
              ></img>
              Linkedin{" "}
            </a>
          </h1>
          <h3>Find my info here</h3>{" "}
          <h1 className="cntctcard">
            <a
              className="contactRES"
              download="Brian Loveless - Resume.pdf"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FontAwesomeIcon className="bp" icon={faFilePdf} /> Resume
            </a>
          </h1>
          <h3>Or schedule a 15 minute meeting</h3>
          <h1 className="cntctcard">
            <a
              className="contactRES"
              href="https://calendly.com/brian-loveless1/15min"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Calendly 🗓 {" "}
            </a>{" "}
          </h1>
        </div>

        <h4 className="homeMid3">stay tuned for more content soon</h4>
      </div>
    );
  }
}
