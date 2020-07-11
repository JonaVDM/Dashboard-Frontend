import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions'

interface Props {
  children?: any,
  logout: any,
}

function Dashboard({ children, logout }: Props) {
  function signOut() {
    logout()
  }

  return (
    <div>
      {children}
    </div>
  );
}

function mapDispatch(dispatch: any) {
  return {
    logout: async () =>
      await dispatch(logout()),
  }
}

export default connect(null, mapDispatch)(Dashboard);
