import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './home/Home';
import Login from './login/Login';

import { loadToken } from './redux/actions';
import { connect } from 'react-redux';

interface Props {
  dispatch: any,
}

function App({ dispatch }: Props) {
  dispatch(loadToken());
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default connect()(App);
