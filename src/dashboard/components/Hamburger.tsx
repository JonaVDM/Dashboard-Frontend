import React from 'react';

interface Props {
    onToggle: () => void,
    isActive: boolean
}

export default function Hamburger({ onToggle, isActive }: Props): JSX.Element {
    function className() {
        return isActive ? 'hamburger hamburger--active' : 'hamburger';
    }

    return (
        // I know, it does not look like a hamburger...
        <div className={className()} onClick={onToggle}></div>
    );
}
