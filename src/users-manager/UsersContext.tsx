/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext, useContext } from 'react';
import * as api from '../api';
import userContext from '../userContext';

interface Context {
  users: User[],
  filtered: User[],
  setFiltered: any,
  tableColumns: string[],
}

interface Props {
  children: any,
}

let defaultContext: Context = {
  users: [],
  filtered: [],
  setFiltered: () => { },
  tableColumns: ['_id', 'name', 'email', 'role.name'],
}

const UsersContext = createContext<Context>(defaultContext);

export default UsersContext;
export function UsersProvider({ children }: Props) {
  const { token } = useContext(userContext);

  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);

  async function loadUsers() {
    try {
      let data = await api.users.load(token);
      setUsers(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);

  let provider: Context = {
    users,
    filtered,
    setFiltered,
    tableColumns: defaultContext.tableColumns
  }

  return (
    <UsersContext.Provider value={provider}>
      {children}
    </UsersContext.Provider>
  );
}
