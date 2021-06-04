import "./bizcard.css";
import pdf from "./images/BrianRes.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import cert from "./images/GA_CERT.pdf";

export default class BizCard extends Component {
  render() {
    return (
      <div className="biz">
        <div className="title">
          <h1>My Digital Cards</h1>
        </div>
        <div className="cards">
          <h2 className="biss">
            {" "}
            <a
              className="bizlink"
              download="Brian Loveless - Resume.pdf"
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <div className="space">
                Resume
                <FontAwesomeIcon className="bizpic" icon={faFilePdf} />{" "}
              </div>
            </a>
          </h2>
          <h2 className="biss">
            {" "}
            <a
              className="bizlink up"
              href="https://www.linkedin.com/in/brianloveless321bl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="space">
                LinkedIn{" "}
                <img
                  className="bizpic"
                  src="data:image/png;base64,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"
                  height="30px"
                  width="30px"
                  alt="linkedIn logo"
                ></img>
              </div>
            </a>
          </h2>
          <h2 className="biss">
            {" "}
            <a
              className="bizlink up"
              href="https://github.com/BrianLoveGa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="space">
                GitHub
                <img
                  className="bizpic"
                  src="data:image/png;base64,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"
                  height="30px"
                  width="30px"
                  alt="Git Hub logo"
                ></img>
              </div>
            </a>
          </h2>
      
          <h2 className="biss">
            {" "}
            <a
              className="bizlink up"
              href="https://www.codewars.com/users/BrianLoveless1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="space">
                Code Wars
                <img
                  className="bizpic"
                  src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codewars-512.png"
                  height="30px"
                  width="30px"
                  alt="Code Wars logo"
                ></img>
              </div>
            </a>
          </h2>
          
          <h2 className="biss">
            {" "}
            <a
              className="bizlink up"
              href="https://www.youtube.com/channel/UCDhV9ljaaONARojllOzuw5g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="space">
                YouTube
                <img
                  className="bizpic"
                  src="data:image/jpeg;base64,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"
                  height="30px"
                  width="50px"
                  alt="You Tube logo"
                ></img>
              </div>
            </a>
          </h2>
          <h2 className="biss">
            {" "}
            <a
              className="bizlink up"
              href="https://www.facebook.com/brian.loveless.90"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="space">
                Facebook
                <img
                  className="bizpic"
                  src="data:image/png;base64,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"
                  height="30px"
                  width="50px"
                  alt="Facebook logo"
                ></img>
              </div>
            </a>
          </h2>
          <h2 className="biss">
            {" "}
            <a
              className="bislink cert"
              download="Brian Loveless - GA CERT.pdf"
              href={cert}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="unspace">
                <img
                  className="bispic"
                  src="https://www.drupal.org/files/general-assembly_logo.png"
                  height="30px"
                  width="30px"
                  alt="General Assembly logo"
                ></img>
                GA Certificate
              </div>
            </a>
          </h2>
          <h2 className="biss">
            {" "}
            <a
              className="bislink cert"
              href="https://www.freecodecamp.org/certification/fcc834d7277-a991-4083-bda5-6372b69a9f1e/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="unspace">
                <img
                  className="bispic"
                  src="https://cdn.rawgit.com/Deftwun/e3756a8b518cbb354425/raw/6584db8babd6cbc4ecb35ed36f0d184a506b979e/free-code-camp-logo.svg"
                  height="30px"
                  width="30px"
                  alt="Free Code Camp logo"
                ></img>
                F.C.C. Web-Dev Certificate
              </div>
            </a>
          </h2>
          <h2 className="biss">
            {" "}
            <a
              className="bislink cert"
              href="https://www.freecodecamp.org/certification/fcc834d7277-a991-4083-bda5-6372b69a9f1e/javascript-algorithms-and-data-structures"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="unspace">
                <img
                  className="bispic"
                  src="https://cdn.rawgit.com/Deftwun/e3756a8b518cbb354425/raw/6584db8babd6cbc4ecb35ed36f0d184a506b979e/free-code-camp-logo.svg"
                  height="30px"
                  width="30px"
                  alt="Free Code Camp logo"
                ></img>
                F.C.C. JavaScript Certificate
              </div>
            </a>
          </h2>
          <h2 className="biss">
            {" "}
            <a
              className="bislink cert"
              href="https://courses.edx.org/certificates/db55972a3dc0475baaccb11f82c02fa2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="unspace">
                <img
                  className="bispic"
                  src={require("./images/EdXLogo.png")}
                  height="30px"
                  width="50px"
                  alt="edx website logo"
                ></img>
                edX.org Java O O P cert
              </div>
            </a>
          </h2>
        </div>
      </div>
    );
  }
}
