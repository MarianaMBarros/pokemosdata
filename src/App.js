import React from "react";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import Routes from "./Routes";


const App = () => {
  return (
    <>
      <HashRouter basename="/">
        <Routes />
      </HashRouter>
    </>
  );
};

export default App;