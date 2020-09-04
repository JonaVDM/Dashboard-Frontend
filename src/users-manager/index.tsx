import React from 'react';
import { Card, Sizes, Btn, Color } from '../components/components';
import UserList from './UserList';
import { UsersProvider } from './UsersContext';
import UsersFilter from './UsersFilter';
import UserAlert from './UserAlert';
import UserEdit from './UserEdit';

export default function UserManger(): JSX.Element {
  return (
    <UsersProvider>
      <div className="grid">

        <Card size={Sizes.full} noBackground>
          <div className="flex-spaced">
            <p className="h1">User Manger</p>
            <Btn color={Color.Primary}>New</Btn>
          </div>
        </Card>

        <UserAlert />

        <UserEdit />

        <Card size={Sizes.three_quarters}>
          <UserList />
        </Card>

        <Card size={Sizes.quarter}>
          <p className="h2 pad-bottom">Filter</p>
          <UsersFilter />
        </Card>
      </div>
    </UsersProvider>
  );
}
