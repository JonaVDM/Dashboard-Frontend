import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from '../login/Login';
import NoMatch from '../no-match/NoMatch';
import pages from './routes';
import Dashbaord from '../dashboard/Dashbaord';
import userContext from '../userContext';

export interface RouteLink {
  location: string,
  element: JSX.Element,
  requirements?: string[]
}

export default function Routes(): JSX.Element {
  let routes: JSX.Element[] = [];

  // load the context
  let { user } = useContext(userContext);


  // Skip loop if user not logged in
  if (user) {
    let { permissions } = user.role;
    for (const route of pages) {
      let { element, location, requirements } = route;

      // Check if the user has permission to view the page
      if (!permissions.includes('admin') && requirements) {
        let allowed = false;
        for (let requirement of requirements) {
          const category = requirement.split('.')[0];
          if (permissions.includes(requirement) ||
            permissions.includes(category)) {
            allowed = true;
          }
        }
        if (!allowed) continue;
      }

      // Add the page to the router if it has permission
      routes.push(
        (
          <Route exact path={location} key={location}>
            <Dashbaord>
              {element}
            </Dashbaord>
          </Route>
        )
      );
    }
  }

  return (
    <Router>
      <Switch>
        {/* Routes */}
        {routes}

        {/* Login page */}
        <Route exact path="/login" render={() => (
          (user) ? <Redirect to="/" /> : <Login />
        )} />

        {/* 404 or login page */}
        <Route path="*" render={() => (
          (!user) ? <Redirect to="/login" /> : <NoMatch />
        )} />
      </Switch>
    </Router>
  );
}
