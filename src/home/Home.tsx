import React from 'react';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';

interface Props {
  name: string
}

function Home({ name }: Props) {

  return (
    <h1>Hello {name}</h1>
  );
}

function mapState(state: RootState) {
  return {
    name: state.auth.user.name
  }
}

export default connect(mapState)(Home);
