import Home from "./components/home";
import React from "react"; /// well its a react app
import { Route, Switch, Link } from "react-router-dom"; /// to have all the pages happy clicky
import "./App.css"; /// b/c style points count

import BizCard from "./components/bizcard";
import About from "./components/about";
import Projects from "./components/projects";
import More from "./components/more";
import Contact from "./components/contact";
import Codecamp from "./components/codecamp";
import Secret from "./components/secret";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="top">Brian Loveless</h1>
        <Link className="neon-link" to="/portfolio-improvements/secret">
          <h1 className="neon">OPEN</h1>
        </Link>
      </div>
      <h1 className="tagline">Software Engineer / Programmer</h1>
      <div className="instruction">
        <h2>'tis the season for snow!</h2>
        <h3>
          click the holiday link found on my 2nd portfolio page at the bottom
        </h3>
        <h3>for more holiday themed fun</h3>
        <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❆</div>
          <div class="snowflake">❅</div>
          <div class="snowflake">❆</div>
        </div>
      </div>
      <div>
        <nav role="navigation">
          <div id="menuToggle">
            <h3 className="sideNav">↑ Nav </h3>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>NAVIGATION</li>
              <li>
                <Link className="link" to="/portfolio-improvements/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/portfolio-improvements/projects">
                  Projects
                </Link>
              </li>

              <li>
                <Link className="link" to="/portfolio-improvements/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="/portfolio-improvements/biz">
                  Biz Card
                </Link>
              </li>
              <li>
                <Link className="link" to="/portfolio-improvements/contact">
                  Contact
                </Link>
              </li>

              <li>stay tuned</li>
              <li>more coming soon</li>
            </ul>
          </div>
        </nav>
      </div>
      <main>
        <div className="sitebox">
          <Switch>
            <Route
              path="/portfolio-improvements/home"
              exact={true}
              component={Home}
            />{" "}
            <Route
              path="/portfolio-improvements/"
              exact={true}
              component={Home}
            />{" "}
            <Route path="/" exact={true} component={Home} />{" "}
            <Route
              path="/portfolio-improvements/about"
              exact={true}
              component={About}
            />{" "}
            <Route
              path="/portfolio-improvements/projects/codecamp"
              exact={true}
              component={Codecamp}
            />{" "}
            <Route
              path="/portfolio-improvements/more"
              exact={true}
              component={More}
            />{" "}
            <Route
              path="/portfolio-improvements/secret"
              exact={true}
              component={Secret}
            />{" "}
            <Route
              path="/portfolio-improvements/contact"
              exact={true}
              component={Contact}
            />{" "}
            <Route
              path="/portfolio-improvements/biz"
              exact={true}
              component={BizCard}
            />{" "}
            <Route
              path="/portfolio-improvements/projects"
              exact={true}
              component={Projects}
            />{" "}
          </Switch>
        </div>
      </main>
      <footer>
        <h3 className="pinktext">
          Other Pages Include :{" "}
          <a
            className="footlink"
            href="https://www.brianloveless.com/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            My first website
          </a>
          <a
            className="footlink"
            href="https://brianloveless-copy.netlify.com/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Then 2nd portfolio
          </a>
        </h3>
      </footer>
    </div>
  );
}

export default App;
