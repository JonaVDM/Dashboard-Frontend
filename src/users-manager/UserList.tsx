import React, { useContext } from 'react';
import { TableList } from '../components/components';
import UsersContext from './UsersContext';
import UserContext from '../userContext';
import { users } from '../api'

export default function UserList(): JSX.Element {
  let { filtered, tableColumns, removeUser, findUser } = useContext(UsersContext);
  let { user, token } = useContext(UserContext);

  let canEdit = false;
  let canDelete = false;

  if (user) {
    let { role } = user;
    if (role.permissions.includes('admin')) {
      canEdit = true;
      canDelete = true;
    }
    if (role.permissions.includes('user.edit')) {
      canEdit = true;
    }
    if (role.permissions.includes('user.delete')) {
      canDelete = true;
    }
  }

  function onDelete(id: string) {
    let user = findUser(id);

    removeUser(id);

    if (user) {
      users.remove(token, user.name);
    }
  }

  return (
    <TableList
      columns={tableColumns}
      selector="name"
      data={filtered}
      canEdit={canEdit}
      canDelete={canDelete}
      onDelete={onDelete} />
  );
}
