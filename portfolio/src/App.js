import Home from './components/home';
import React from "react"; /// well its a react app
import { Route, Switch, Link, Redirect } from "react-router-dom"; /// to have all the pages happy clicky
import "./App.css"; /// b/c style points count

import BizCard from "./components/bizcard";
import About from "./components/about";
import Projects from "./components/projects";


function App() {
  return (
    <div className="app">
      <h1 className="top">Brian Loveless Portfolio</h1>
      <h2>Work in progress .... site under construction</h2>
      <div>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
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
              <li>Show me more</li>
            </ul>
          </div>
        </nav>
      </div>
      <main>
        <div>
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
    </div>
  );
}

export default App;
