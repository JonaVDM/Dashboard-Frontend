import { Btn, Color } from '../../components/components';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions';
import React from 'react';

interface Props {
  expanded: boolean,
  logout: any
}

function Sidebar({ expanded, logout }: Props): JSX.Element {
  function className() {
    if (expanded) return 'sidebar sidebar--expanded';
    return 'sidebar';
  }

  function signOut() {
    logout();
  }

  return (
    <div className={className()}>
      Sidebar

      <div className="sidebar__logout mar-top">
        <Btn text="Logout" color={Color.Danger} onClick={signOut} />
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

export default connect(null, mapDispatch)(Sidebar);
