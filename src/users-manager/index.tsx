import React from 'react';
import { Card, Alert, Sizes, Filter } from '../components/components';
import NewUser from './NewUser';
import UserList from './UserList';
import { UsersProvider } from './UsersContext';

export default function UserManger(): JSX.Element {
  return (
    <UsersProvider>
      <div className="grid">

        <Card size={Sizes.full}>
          <p className="h1">User Manger</p>
        </Card>

        {/* {message && (
        <Alert color={color} onClose={() => setMessage('')}>{message}</Alert>
      )} */}

        {/* <Card size={Sizes.half}>
        <p className="h2 pad-bottom">New</p>
        <NewUser onError={onError} onMessage={onMessage} roles={roles} />
      </Card> */}

        <Card size={Sizes.three_quarters}>
          <UserList />
        </Card>

        {/* <Card size={Sizes.quarter}>
        <p className="h2 pad-bottom">Filter</p>
        <Filter data={users} onFilter={() => { }} columns={['name']} />
      </Card> */}
      </div>
    </UsersProvider>
  );
}
