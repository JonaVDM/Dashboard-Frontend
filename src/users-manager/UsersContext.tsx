/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext, useContext } from 'react';
import * as api from '../api';
import userContext from '../userContext';
import { Color } from '../components/components';

interface Context {
  users: User[],
  filtered: User[],
  tableColumns: string[],
  alert?: Alert,
  setFiltered: any,
  setAlert: any,
}

interface Alert {
  message: string,
  color?: Color,
  icon?: string
}

interface Props {
  children: any,
}

let defaultContext: Context = {
  users: [],
  filtered: [],
  setFiltered: () => { },
  setAlert: () => { },
  tableColumns: ['_id', 'name', 'email', 'role.name'],
}

const UsersContext = createContext<Context>(defaultContext);

export default UsersContext;
export function UsersProvider({ children }: Props) {
  const { token } = useContext(userContext);

  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);

  const [alert, setAlert] = useState<Alert>({ message: '' });

  async function loadUsers() {
    try {
      let data = await api.users.load(token);
      setUsers(data);
    } catch (e) {
      setAlert({ message: e.message });
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
    alert,
    setAlert,
    tableColumns: defaultContext.tableColumns
  }

  return (
    <UsersContext.Provider value={provider}>
      {children}
    </UsersContext.Provider>
  );
}
