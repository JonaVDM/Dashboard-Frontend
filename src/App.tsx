import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './home/Home';
import Login from './login/Login';
import NoMatch from './no-match/NoMatch';

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
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default connect()(App);
