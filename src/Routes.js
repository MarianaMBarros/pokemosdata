import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home/index"
import Detail from "./Pages/Detail/index"

const Routes = () => (
  <Switch>
    <Route path="/detail/:id" exact>
      <Detail />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;