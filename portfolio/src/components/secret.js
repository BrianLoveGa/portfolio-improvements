import "./secret.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Secret extends Component {
  render() {
    return (
      <div className="secret-box">
        <h1>Come on in I assure you we are open !</h1>
        <div className="gif-box">
          <div className="giffygif">
            <iframe
              title="open sign from Shitt's Creek"
              src="https://giphy.com/embed/xUA7aLpVxPVEoEPXji"
              frameBorder="0"
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <p>
          <a
            className="glink"
            href="https://giphy.com/gifs/cbc-funny-comedy-xUA7aLpVxPVEoEPXji"
            target="_blank"
            rel="noopener noreferrer"
          >
            all gifs via GIPHY on this page
          </a>
        </p>

        <h3>Now taking orders for </h3>
        <div className="openlist">
          <ul className="openlist">
            <li>Custom Website Creation</li>
            <li>New Website Design and Development</li>
            <li>Updating exisitng Sites or Apps</li>
          </ul>
        </div>
        <div className="cards">
          <h2>I have recently made some static site holiday cards</h2>
          <h3>Valentine's for my Sweet-Heart</h3>
          <div></div>
          <h4>HTML & CSS static site responsive images and media</h4>
          <h4>designed for mobile viewing</h4>
          <img
            src={require("./images/vday.png")}
            className="responsive"
            alt="picture of rose galaxy and a picture of a dog holding a flower with text above galaxy photo and between the two"
          />
          <p>
            <a
              className="holiday-card"
              href="https://brianlovega.github.io/ilovemichellefryer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              V-Day Card
            </a>
          </p>
          <h3>Birthday for my Dad's 70th</h3>
          <div></div>
          <h4>HTML & CSS static site responsive video and images</h4>
          <h4>designed for mobile viewing</h4>
          <img
            src={require("./images/dad-bday-card.png")}
            className="responsive"
            alt="picture of me and dad on couch with our dogs with text above photo : he's a dog gone great dad and sports news from 1950 underneath"
          />
          <p>
            <a
              className="holiday-card"
              href="https://brianlovega.github.io/Happy-B-DAY_POPS/"
              target="_blank"
              rel="noopener noreferrer"
            >
              B-Day Card
            </a>
          </p>
        </div>
        <div className="wiz">
          <h2>I am not claiming to be a full fledged "4 W" just yet</h2>
          <h3>World Wide Web Wizard</h3>
          <div className="gif-box">
            <div className="giffygif">
              <iframe
                src="https://giphy.com/embed/l0ExsgrTuACbtPaqQ"
                title="cartoon of wizard in a cave with green magic beams flying out of his hands"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <h2>
          {" "}
          I do have a few tricks up my sleeves and cool tools in my belt coupled
          with an unyeilding passion to learn more !
        </h2>
        <div className="gif-box">
          <div className="giffygif">
            <iframe
              src="https://giphy.com/embed/YHvwPgwojjsFa"
              title="batman using rocket escape on tool belt"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <h2>
          If you are ready to blast off into the interwebs{" "}
          <Link className="scrt-link" to="/portfolio-improvements/contact">
            Contact Me{" "}
          </Link>
          to get started on your journey
        </h2>
      </div>
    );
  }
}
