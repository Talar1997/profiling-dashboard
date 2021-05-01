import React from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import "../assets/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import { routes } from "../routes/routes";

export default function App() {
  const routesComponents = routes.map((route) => (
    <Route key={route.to} exact={route.exact} path={route.to}>
      {route.view}
    </Route>
  ));

  return (
    <BrowserRouter>
      <Switch>
        {routesComponents}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
