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

export const routes: { location: string, name: string, element: JSX.Element }[] = [
  {
    location: '/',
    name: 'Dashbaord',
    element: (<Home />)
  },
];

function Routes({ isLoggedIn }: Props): JSX.Element {
  let routesEl: JSX.Element[] = [];
  for (const route of routes) {
    let { element, location } = route;

    routesEl.push(
      (
        <Route exact paht={location} key={location} render={() => {
          if (!isLoggedIn) {
            return (
              <Redirect to="/login"  />
            );
          }
          return element;
        }}/>
      )
    );
  }

  return (
    <Router>
      <Switch>
        {routesEl}

        <Route exact path="/login" render={() => (
          (isLoggedIn) ? <Redirect to="/" /> : <Login />
        )} />

        <Route path="*" render={() => (
          (!isLoggedIn) ? <Redirect to="/login" /> : <NoMatch />
        )} />
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
