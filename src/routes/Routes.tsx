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
import UsersManager from '../users-manager/UsersManager';
import UITester from '../ui-tester/UITester';

interface Props {
  isLoggedIn: boolean,
  permissions: string[]
}

interface RouteLink {
  location: string,
  element: JSX.Element,
  requirements?: string[]
}

export const routes: RouteLink[] = [
  {
    location: '/',
    element: (<Home />)
  },
  {
    location: '/users',
    element: (<UsersManager />),
    requirements: ['user.read']
  },
  {
    location: '/grid',
    element: (<UITester />),
    requirements: ['admin']
  },
];

function Routes({ isLoggedIn, permissions }: Props): JSX.Element {
  let routesEl: JSX.Element[] = [];
  for (const route of routes) {
    let { element, location } = route;

    if (!permissions.includes('admin') && route.requirements) {
      let allowed = false;
      for (let requirement of route.requirements) {
        const category = requirement.split('.')[0];
        if (permissions.includes(requirement) ||
          permissions.includes(category)) {
          allowed = true;
        }
      }

      if (!allowed) continue;
    }

    routesEl.push(
      (
        <Route exact path={location} key={location} render={() => {
          if (!isLoggedIn) {
            return (
              <Redirect to="/login" />
            );
          }
          return element;
        }} />
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
    permissions: state.auth.role.permissions,
  }
};

export default connect(mapState)(Routes);
