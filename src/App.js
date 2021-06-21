import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Github from "./components/github";
export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/Github">GitHub</Link>
            </li>
          </ul>
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
