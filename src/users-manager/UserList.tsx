import React, { useContext } from 'react';
import { TableList } from '../components/components';
import UsersContext from './UsersContext';
import UserContext from '../userContext';

export default function UserList(): JSX.Element {
  let { filtered, tableColumns } = useContext(UsersContext);
  let { user } = useContext(UserContext);

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

  return (
    <TableList
      columns={tableColumns}
      selector="name"
      data={filtered}
      canEdit={canEdit}
      canDelete={canDelete} />
  );
}
