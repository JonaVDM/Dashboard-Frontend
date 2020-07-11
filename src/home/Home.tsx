import React from 'react';
import Dashboard from '../dashboard/Dashbaord';
import { RootState } from '../redux/reducers';
import { connect } from 'react-redux';

interface Props {
  name: string
}

function Home({ name }: Props) {

  return (
    <Dashboard>
      <h1>Hello {name}</h1>
    </Dashboard>
  );
}

function mapState(state: RootState) {
  return {
    name: state.auth.user.name
  }
}

export default connect(mapState)(Home);
