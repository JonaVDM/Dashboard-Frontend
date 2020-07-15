import React from 'react';
import Dashboard from '../dashboard/Dashbaord';
import { Card, Sizes } from '../components/components';

function UsersManager(): JSX.Element {
  return (
    <Dashboard>
      <div className="grid">
        <Card size={Sizes.full}>
          <h1 className="h1">User Manger</h1>
        </Card>
      </div>
    </Dashboard>
  );
}

export default UsersManager;
