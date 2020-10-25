import { Btn, Color } from '../../components/components';
import Hamburger from './Hamburger';
import logo from '../../assets/logo.png';
import React, { useContext } from 'react';
import userContext from '../../userContext';

interface Props {
  onNavToggle: () => void,
  isActive: boolean,
}

export default function Header({ onNavToggle, isActive }: Props): JSX.Element {
  let { logout } = useContext(userContext);

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
        <Btn color={Color.Danger} onClick={signOut}>Logout</Btn>
      </div>
    </div>
  );
}
