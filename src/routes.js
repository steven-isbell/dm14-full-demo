import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/shop" component={Shop} />
    <Route path="*" render={() => <div>FourOhFour</div>} />
  </Switch>
);
