import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Github from "./components/github";
import Home from "./components/Homepage";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col">
        <nav className="bg-gray-800 flex flex-row justify-around text-white">
          <Link to="/">Home</Link>
          <Link to="/Github">Issues</Link>
        </nav>

        <Switch>
          <Route path="/Github">
            <Github />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
