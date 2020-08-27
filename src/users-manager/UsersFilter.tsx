import React, { useContext } from 'react';
import { Filter } from '../components/components';
import UsersContext from './UsersContext';

export default function UsersFilter() {
  let { users, setFiltered, tableColumns } = useContext(UsersContext);

  return (
    <Filter data={users} onFilter={setFiltered} columns={tableColumns} />
  );
}
