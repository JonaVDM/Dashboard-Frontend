import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions'
import Header from './components/Header';
import Sidebar from './components/Sidebar';

interface Props {
  children?: any,
  logout: any,
}

function Dashboard({ children, logout }: Props) {
  function signOut() {
    logout()
  }

  let [expanded, setExpanded] = useState(false);

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <Header onNavToggle={() => setExpanded(!expanded)} isActive={expanded} />
      </div>

      <div className="dashboard__sidebar">
        <Sidebar expanded={expanded} />
      </div>

      <div className="dashboard__content">
        {children}
      </div>
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
