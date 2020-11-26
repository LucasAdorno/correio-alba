import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/search' component={Searchpage} />
    </Switch>
  );
}

export default Routes;