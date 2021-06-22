import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./components/Homepage";
import Github from "./components/github";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Github/:page">
          <Github />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
