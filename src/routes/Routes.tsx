import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { connect } from 'react-redux';
import { RootState } from '../redux/reducers';

import Home from '../home/Home';
import Login from '../login/Login';
import NoMatch from '../no-match/NoMatch';

interface Props {
  isLoggedIn: boolean
}

function Routes({ isLoggedIn }: Props): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => (
          (!isLoggedIn) ? <Redirect to="/login" /> : <Home />
        )} />

        <Route exact path="/login" render={() => (
          (isLoggedIn) ? <Redirect to="/" /> : <Login />
        )} />

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

function mapState(state: RootState) {
  return {
    isLoggedIn: state.auth.token !== '',
  }
};

export default connect(mapState)(Routes);
