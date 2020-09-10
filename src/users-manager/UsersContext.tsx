/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext, useContext } from 'react';
import * as api from '../api';
import userContext from '../userContext';
import { Color } from '../components/components';

interface Context {
  roles: Role[],
  users: User[],
  filtered: User[],
  setFiltered: any,
  tableColumns: string[],
  alert?: Alert,
  setAlert: any,
  mode: Mode,
  setMode: any,
  addUser: (user: User) => void;
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
  setMode: () => { },
  addUser: () => { },
}

const UsersContext = createContext<Context>(defaultContext);

export default UsersContext;
export function UsersProvider({ children }: Props) {
  const { token } = useContext(userContext);

  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);

  const [roles, setRoles] = useState<Role[]>([]);

  const [alert, setAlert] = useState<Alert>({ message: '' });

  const [mode, setMode] = useState<Mode>(defaultContext.mode);

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

  function addUser(user: User) {
    let userList = [...users, user] // Copy the list just incase
    setUsers(userList);
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
    mode,
    setMode,
    addUser,
  }

  return (
    <UsersContext.Provider value={provider}>
      {children}
    </UsersContext.Provider>
  );
}
