import React from 'react';
import { TableList } from '../components/components';

interface Props {
  users: User[]
}

export default function UserList({ users }: Props): JSX.Element {
  let columns = [
    '_id',
    'name',
    'email',
    'role'
  ];

  return (
    <TableList columns={columns} selector="name" data={users} />
  );
}
