import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Pokemons from "./Pages/Pokemons/index"
import Detail from "./Pages/Detail/index"
import Home from "./Pages/Home";
import Login from "./Pages/404";

const Routes = () => (
  <Switch>
    <Route path="/detail/:num" exact>
      <Detail />
    </Route>
    <Route path="/pokemons" exact>
      <Pokemons />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
    <Route path="/" exact>
      <Home />
    </Route>
  </Switch>
);

export default Routes;