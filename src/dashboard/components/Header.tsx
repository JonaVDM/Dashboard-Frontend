import { Btn, Color } from '../../components/components';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions'
import Hamburger from './Hamburger';
import logo from '../../assets/logo.png';
import React from 'react';

interface Props {
  onNavToggle: () => void,
  isActive: boolean,
  logout: any
}

function Header({ onNavToggle, isActive, logout }: Props): JSX.Element {
  function signOut() {
    logout();
  }

  return (
    <div className="header">
      <div className="header__hamburger">
        <Hamburger isActive={isActive} onToggle={onNavToggle} />
      </div>

      <img src={logo} alt="Logo" className="header__logo" />

      <div className="header__logout">
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

export default connect(null, mapDispatch)(Header);
