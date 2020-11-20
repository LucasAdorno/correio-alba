import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
    </Switch>
  );
}

export default Routes;