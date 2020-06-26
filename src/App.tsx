import React from 'react';

import Routes from './routes/Routes';

import { loadToken } from './redux/actions';
import { connect } from 'react-redux';

interface Props {
  dispatch: any,
}

function App({ dispatch }: Props) {
  dispatch(loadToken());
  return (
    <Routes />
  );
}

export default connect()(App);
