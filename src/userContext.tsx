import React, { useState, useEffect } from 'react';
import * as api from './api';

interface ctx {
  user?: User,
  token?: string,
  saveToken: any,
  logout: () => void
}


// why is this a thing
let defaultValue: ctx = {
  logout: () => { },
  saveToken: () => { }
}

const userContext = React.createContext<ctx>(defaultValue);

interface Props {
  children: any,
}

export function UserProvider({ children }: Props) {
  let [user, setUser] = useState(undefined);
  let [token, setToken] = useState(localStorage.getItem('token') ?? '');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { loadUser() }, [token]);

  async function loadUser() {
    if (token === '') {
      setUser(undefined);
    } else {
      let user = await api.auth.me(token);
      if (!user) {
        setToken('');
      }
      setUser(user);
    }
  }

  function logout() {
    setToken('');
    localStorage.clear();
  }

  function saveToken(token: string) {
    setToken(token);
    localStorage.setItem('token', token)
  }

  let provider = {
    user, token, logout, saveToken
  }

  return (
    <userContext.Provider value={provider}>
      {children}
    </userContext.Provider>
  );
}

export default userContext;
