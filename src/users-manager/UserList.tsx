import React, { useContext } from 'react';
import { TableList } from '../components/components';
import UsersContext from './UsersContext';

export default function UserList(): JSX.Element {
  let { users } = useContext(UsersContext);

  let columns = [
    '_id',
    'name',
    'email',
    'role.name'
  ];

  return (
    <TableList columns={columns} selector="name" data={users} />
  );
}
