import React from 'react';

interface Props {
    expanded: boolean
}

export default function Sidebar({expanded}: Props): JSX.Element {
    function className() {
        if (expanded) return 'sidebar sidebar--expanded';
        return 'sidebar';
    }

    return (
        <div className={className()}>
            Sidebar
        </div>
    );
}
