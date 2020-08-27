import React, { useContext } from 'react';
import { TableList } from '../components/components';
import UsersContext from './UsersContext';

export default function UserList(): JSX.Element {
  let { filtered, tableColumns } = useContext(UsersContext);

  return (
    <TableList columns={tableColumns} selector="name" data={filtered} />
  );
}
