import React, { useState, useEffect } from 'react';
import Routes from './routes/RouterElement';
import userContext from './userContext';
import * as api from './api';

export default function App() {
  let [user, setUser] = useState({});
  let [token, setToken] = useState(localStorage.getItem('token') ?? '');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { loadUser() }, [token]);

  async function loadUser() {
    if (token !== '') {
      let user = await api.auth.me(token);
      if (!user) {
        setToken('');
      }
      setUser(user);
    }
  }

  return (
    <userContext.Provider value={{ user, token }}>
      <Routes />
    </userContext.Provider>
  );
}
