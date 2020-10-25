import React, { useState, useEffect } from 'react';
import * as api from './api';

interface Context {
  user?: User,
  token: string,
  saveToken: any,
  logout: () => void
}

let defaultValue: Context = {
  logout: () => { },
  saveToken: () => { },
  token: '',
}

const userContext = React.createContext<Context>(defaultValue);

interface Props {
  children: any,
}

export function UserProvider({ children }: Props) {
  function cacheUser() {
    let stored = localStorage.getItem('user');
    return (stored) ? JSON.parse(stored) : undefined;
  }

  let [user, setUser] = useState(cacheUser());
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
      localStorage.setItem('user', JSON.stringify(user));
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
