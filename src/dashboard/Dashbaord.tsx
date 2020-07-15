import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

interface Props {
  children?: any
}

function Dashboard({ children }: Props) {
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

export default connect(null, null)(Dashboard);
