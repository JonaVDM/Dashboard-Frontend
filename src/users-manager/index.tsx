import React, { useState, useContext, useEffect } from 'react';
import { Card, Sizes, Btn, Color } from '../components/components';
import UserList from './UserList';
import usersContext, { UsersProvider, Mode } from './UsersContext';
import UsersFilter from './UsersFilter';
import UserAlert from './UserAlert';
import UserEdit from './UserEdit';

export default function UserManger(): JSX.Element {
  let [modeString, setModeString] = useState('Pizza\'s Are quite nice');

  let { mode } = useContext(usersContext);

  useEffect(() => {
    if (mode === Mode.create) setModeString('Add User');
    if (mode === Mode.edit) setModeString('Edit User');
  }, [mode]);

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

        <Card>
          <p className="h2 pad-bottom">{modeString}</p>
          <UserEdit />
        </Card>

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
