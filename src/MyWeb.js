import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Resume from './Resume';
import LogIn from './LogIn';

export default class MyWeb extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/resume" component={Resume} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </div>
    );
  }
}
