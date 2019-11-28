import Home from './components/home';
import React from "react"; /// well its a react app
import { Route, Switch, Link, Redirect } from "react-router-dom"; /// to have all the pages happy clicky
import "./App.css"; /// b/c style points count

import BizCard from "./components/bizcard";
import About from "./components/about";
import Projects from "./components/projects";
import More from "./components/more";



function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="top">Brian Loveless Portfolio</h1>
        <h1 className="neon">OPEN</h1>
      </div>
      <div className="construction">
        <h2>Work in progress .... site under construction</h2>
        <h2>Pick a page from the 3 green lines on the left</h2>
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
                <Link className="link" to="/portfolio-improvements/projects">
                  Projects
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
            <Route exact path="/">
              <Redirect to="/portfolio-improvements/home" />
            </Route>
            <Route
              path="/portfolio-improvements/about"
              exact={true}
              component={About}
            />{" "}
            <Route
              path="/portfolio-improvements/more"
              exact={true}
              component={More}
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
            className="toplink"
            href="https://www.brianloveless.com/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            First
          </a>
          <a
            className="toplink"
            href="https://brianloveless-copy.netlify.com/"
            target="_BLANK"
            rel="noopener noreferrer"
          >
            Second
          </a>
        </h3>
      </footer>
    </div>
  );
}

export default App;
