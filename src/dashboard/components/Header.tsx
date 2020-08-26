import { Btn, Color } from '../../components/components';
import Hamburger from './Hamburger';
import logo from '../../assets/logo.png';
import React from 'react';

interface Props {
  onNavToggle: () => void,
  isActive: boolean,
}

export default function Header({ onNavToggle, isActive }: Props): JSX.Element {
  function signOut() {
    // logout();
  }

  return (
    <div className="header">
      <div className="header__hamburger">
        <Hamburger isActive={isActive} onToggle={onNavToggle} />
      </div>

      <img src={logo} alt="Logo" className="header__logo" />

      <div className="header__logout">
        <Btn color={Color.Danger} onClick={signOut}>Logout</Btn>
      </div>
    </div>
  );
}
