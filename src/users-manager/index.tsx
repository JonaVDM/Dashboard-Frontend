import React, { useState } from 'react';
import { Card, Sizes, Btn, Color } from '../components/components';
import UserList from './UserList';
import { UsersProvider } from './UsersContext';
import UsersFilter from './UsersFilter';
import UserAlert from './UserAlert';
import UserCreate from './UserCreate';

export default function UserManger(): JSX.Element {
  let [addActive, setAddActive] = useState(false);

  function changeAdd() { 
    setAddActive(!addActive);
  }
  return (
    <UsersProvider>
      <div className="grid">

        <Card size={Sizes.full} noBackground>
          <div className="flex-spaced">
            <p className="h1">User Manger</p>
            { !addActive && 
            <Btn color={Color.Primary} onClick={changeAdd}>New</Btn>
            }
          </div>
        </Card>

        <UserAlert />

        {addActive
          &&
          <Card size={Sizes.full}>
            <div className="flex-spaced pad-bottom">
              <p className="h2">Add User</p>
              <Btn color={Color.Danger} onClick={changeAdd}>Close</Btn>
            </div>
            <UserCreate onClose={changeAdd}/>
          </Card>
        }

        <Card size={Sizes.full}>
          <p className="h2 pad-bottom">Filter</p>
          <UsersFilter />
        </Card>

        <Card size={Sizes.full}>
          <UserList />
        </Card>
      </div>
    </UsersProvider>
  );
}
