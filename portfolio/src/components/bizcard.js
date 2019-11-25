import "./bizcard.css";
import pdf from "./images/BrianRes.pdf"

import React, { Component } from "react";

export default class BizCard extends Component {
  render() {
    return (
      <div className="biz">
        <h1>My Digital Card</h1>
        <h1>
          {" "}
          <a
            download="Brian Resume.pdf"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Resume PDF Download{" "}
          </a>
        </h1>
        <h2>
          {" "}
          <a
            href="https://www.linkedin.com/in/brianloveless321bl"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </h2>
        <h2>
          {" "}
          <a
            href="https://github.com/BrianLoveGa"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h2>
        <h2>
          {" "}
          <a
            href="https://profiles.generalassemb.ly/profiles/brian-loveless"
            target="_blank"
            rel="noopener noreferrer"
          >
            GA Profile
          </a>
        </h2>
        <h2>
          {" "}
          <a
            href="https://www.codewars.com/users/BrianLoveless1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code Wars
          </a>
        </h2>
        <h2>
          {" "}
          <a
            href="https://dev.to/brianlovega"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEV .To
          </a>
        </h2>
        <h2>
          {" "}
          <a
            href="https://www.youtube.com/channel/UCDhV9ljaaONARojllOzuw5g"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </h2>
        <h2>
          {" "}
          <a
            href="https://www.facebook.com/brian.loveless.90"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </h2>
      </div>
    );
  }
}
