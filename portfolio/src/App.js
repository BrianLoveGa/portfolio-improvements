import Home from './components/home';
import React from "react"; /// well its a react app
import { Route, Switch, Link, Redirect } from "react-router-dom"; /// to have all the pages happy clicky
import "./App.css"; /// b/c style points count

import BizCard from "./components/bizcard";
import About from "./components/about";


function App() {
  return (
    <div className="App">
      <div>
        <h3>Navigation</h3>
        <Link className="link" to="/home">
          BRIAN - Home
        </Link>
        <Link className="link" to="/about">
          BRIAN - About
        </Link>
        <Link className="link" to="/biz">
          BRIAN - Biz Card
        </Link>
      </div>
      <main>
        <Switch>
          <Route path="/home" exact={true} component={Home} />{" "}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/about" exact={true} component={About} />{" "}
          <Route path="/biz" exact={true} component={BizCard} />{" "}
        </Switch>
      </main>
    </div>
  );
}

export default App;
