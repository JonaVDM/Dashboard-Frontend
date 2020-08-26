import React from 'react';

import Routes from './routes/RouterElement';

import { loadToken, loadUser } from './redux/actions';
import { connect } from 'react-redux';

interface Props {
  loadToken: any,
  loadUser: any
}

function App({ loadToken, loadUser }: Props) {
  loadToken();
  loadUser();
  return (
    <Routes />
  );
}

function mapDispatch(dispatch: any) {
  return {
    loadToken: () => dispatch(loadToken()),
    loadUser: () => dispatch(loadUser())
  }
}

export default connect(null, mapDispatch)(App);
