/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext, useContext } from 'react';
import * as api from '../api';
import userContext from '../userContext';
import { Color } from '../components/components';

interface Context {
  roles: Role[],
  users: User[],
  filtered: User[],
  tableColumns: string[],
  alert?: Alert,
  setFiltered: any,
  setAlert: any,
  mode: Mode
}

interface Alert {
  message: string,
  color?: Color,
  icon?: string
}

export enum Mode {
  edit = 1,
  create = 2,
}

interface Props {
  children: any,
}

let defaultContext: Context = {
  roles: [],
  users: [],
  filtered: [],
  setFiltered: () => { },
  setAlert: () => { },
  tableColumns: ['_id', 'name', 'email', 'role.name'],
  mode: Mode.create,
}

const UsersContext = createContext<Context>(defaultContext);

export default UsersContext;
export function UsersProvider({ children }: Props) {
  const { token } = useContext(userContext);

  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);

  const [roles, setRoles] = useState<Role[]>([]);

  const [alert, setAlert] = useState<Alert>({ message: '' });

  async function loadUsers() {
    try {
      let data = await api.users.load(token);
      setUsers(data);
    } catch (e) {
      setAlert({ message: e.message });
    }
  }

  async function loadRoles() {
    try {
      let data = await api.roles.load(token);
      setRoles(data);
    } catch (e) {
      setAlert({ message: e.message });
    }
  }

  useEffect(() => {
    loadUsers();
    loadRoles();
  }, []);

  let provider: Context = {
    roles,
    users,
    filtered,
    setFiltered,
    alert,
    setAlert,
    tableColumns: defaultContext.tableColumns,
    mode: defaultContext.mode,
  }

  return (
    <UsersContext.Provider value={provider}>
      {children}
    </UsersContext.Provider>
  );
}
