import "./home.css"

import React, { Component } from "react";

export default class Home extends Component{
    render(){
        return (
          <div className="home">
            <h1 className="h1home">Welcome Friends</h1>
            <h4>Here you can learn about me</h4>
            <div className="me">
              <img
                src="https://cdn10.bigcommerce.com/s-npe4l/products/1157/images/1335/B-MZ-SMSHD---HIGH__85441.1477602947.1280.1280.jpg?c=2"
                className="smallpic"
                height="200"
                width="200"
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
                  <li>BS in B Admin From GSU</li>
                  <li>&nbsp;</li>
                  <li>I enjoy gaming on my X-box 1</li>
                  <li>I've been to Paris twice</li>
                  <li>Have experience in </li>
                  <li>multiple industries</li>
                  <li>I collect nutcrackers</li>
                  <li>I enjoy Disc-Golf</li>
                </ul>
              </div>
            </div>
            <h4>View my digital business card</h4>
            <h5>Linkedin || Resume || GitHub || YouTube || more</h5>
            <h4>Explore some of my projects</h4>

            <h4>And more coming soon</h4>
          </div>
        );
    }
}