import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route path="/register" exact>
      <Register />
    </Route>
    <Route path="/" exact>
      <Login />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;