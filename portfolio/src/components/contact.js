import "./contact.css";

import React, { Component } from "react";
import ReactContactForm from "react-mail-form";
import pdf from "./images/BLTPRES.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default class Contact extends Component {
  render() {
    return (
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
      </div>
    );
  }
}
