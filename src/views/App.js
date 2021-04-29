import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import "../assets/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

//TODO: make component with static routing and add router automatically
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard data="EVERYTHING" />
        </Route>

        <Route path="/dashboard">
          <Dashboard data="DASHBOARD" />
        </Route>

        <Route path="/users/connected">
          <Dashboard data="USERS CONNECTED" />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
