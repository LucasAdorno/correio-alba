import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import Deppage from "./pages/Deppage";

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/search" component={Searchpage} />
      <Route exact path="/partido/:name" component={Deppage} />
    </Switch>
  );
};

export default Routes;
