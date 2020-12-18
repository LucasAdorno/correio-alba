import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';
import DeputyPage from './pages/DeputyPage';
import ReceiverPage from './pages/ReceiverPage';
import PartyPage from './pages/PartyPage';

// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/search' component={Searchpage} />
      <Route exact path='/party/:id' component={PartyPage} />
      <Route exact path='/deputy/:id' component={DeputyPage} />
      <Route exact path='/receiver/:id' component={ReceiverPage} />
    </Switch>
  );
}

export default Routes;