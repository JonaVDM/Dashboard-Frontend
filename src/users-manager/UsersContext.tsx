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
  addUser: (user: User) => void,
  removeUser: (id: string) => void,
  findUser: (id: string) => User | undefined
}

interface Alert {
  message: string,
  color?: Color,
  icon?: string
}

export enum Mode {
  none = 0,
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
  addUser: () => { },
  removeUser: () => { },
  findUser: () => { return undefined },
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

  function addUser(user: User) {
    let userList = [...users, user] // Copy the list just incase
    setUsers(userList);
  }

  function removeUser(id: string) {
    let userList = [...users]; // Copy the list just incase
    userList = userList.filter((user) => {
      return user._id !== id;
    });

    setUsers(userList);
  };

  function findUser(id: string) {
    let user = users.find((user) => user._id === id);

    return user;
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
    addUser,
    removeUser,
    findUser
  }

  return (
    <UsersContext.Provider value={provider}>
      {children}
    </UsersContext.Provider>
  );
}
