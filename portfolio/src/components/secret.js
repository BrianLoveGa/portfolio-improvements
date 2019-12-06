import "./secret.css";

import React, { Component } from "react";

export default class Secret extends Component {
  render() {
    return (
      <div className="secret-box">
        <h1>SHHH SECRET PAGE</h1>
        <h2>how'd you know to click the open button?</h2>
        <div className="gif-box">
          <div className="giffygif">
            <iframe
              title="open sign from Shitt's Creek"
              src="https://giphy.com/embed/xUA7aLpVxPVEoEPXji"
              frameBorder="0"
              class="giphy-embed"
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
            via GIPHY
          </a>
        </p>
        <h2>Come on in I assure you we are open !</h2>
        <h3>Now taking orders for </h3>
        <div className="openlist">
          <ul className="openlist">
            <li>Custom Website Creation</li>
            <li>New Website Design and Development</li>
            <li>Updating exisitng Sites or Apps</li>
          </ul>
        </div>
      </div>
    );
  }
}
