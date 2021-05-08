import React, { useEffect } from "react";
import { render } from "react-dom";
import "antd/dist/antd.css";
import "../assets/index.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import { routes } from "../routes/routes";
import View from "./View";
import Login from "./Login";

export default function App() {
  useEffect(() => {
    document.title = "Profiling Dashboard";
  }, []);

  const isLoggedIn = true;

  const routesComponents = routes.map((route) => {
    if (route.requireLogin && !isLoggedIn) {
      return <Redirect key={route.to} to={{ pathname: "/login" }} />;
    } else
      return (
        <Route key={route.to} exact={route.exact} path={route.to}>
          <View title={route.description}>{route.view}</View>
        </Route>
      );
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route key="/login" path="/login" exact={true}>
          <View title="Profiling Dashboard - Login">
            <Login />
          </View>
        </Route>
        {routesComponents}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("root"));
