import React from 'react';

import Hamburger from './Hamburger';
import logo from '../../assets/logo.png';

interface Props {
    onNavToggle: () => void,
    isActive: boolean
}

export default function Header({ onNavToggle, isActive }: Props): JSX.Element {
    return (
        <div className="header">
            <div className="header__hamburger">
                <Hamburger isActive={isActive} onToggle={onNavToggle}/>
            </div>

            <img src={logo} alt="Logo" className="header__logo" />

            {/* <div className="header__logo">
                <img src={logo} alt="Logo" className="img"/>
            </div> */}
        </div>
    );
}
