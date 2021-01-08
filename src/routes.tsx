import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route
        exact
        path="/search/:query/:startdate/:enddate"
        component={SearchPage}
      />
    </Switch>
  );
};

export default Routes;
