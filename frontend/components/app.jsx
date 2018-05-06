import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';

const App = () => (
  <div className = 'main'>
    <Switch>
      <Route exact path='/' component = { Home } />
    </Switch>
  </div>
);

export default App;
