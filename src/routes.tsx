import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import Deppage from "./pages/Deppage";
import Partpage from "./pages/Partpage";
import Recpage from "./pages/Recpage";

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/pesquisa" component={Searchpage} />
      <Route exact path="/partido/:name" component={Partpage} />
      <Route exact path="/deputado/:name" component={Deppage} />
      <Route exact path="/recebedor/:name" component={Recpage} />
    </Switch>
  );
};

export default Routes;
