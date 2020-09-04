import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import { TextField, Btn, Color } from '../components/components';
import * as api from '../api';
import userContext from '../userContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const [requesting, setRequesting] = useState(false);

  let { saveToken } = useContext(userContext);

  function disabled(): boolean {
    if (requesting) return true;
    if (password === '' || email === '') return true;
    return false;
  }

  async function login(event?: any) {
    if (event && event.type !== 'click' && event.key !== 'Enter') return;
    if (email === '' || password === '') return;

    setMessage('');
    setRequesting(true);

    let data = await api.auth.login(email, password);

    if (!data.token) {
      setMessage(data.message);
      setRequesting(false);
    } else {
      saveToken(data.token);
    }
  }

  let error;
  if (message !== '') {
    error = <div>{message}</div>
  }

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="Logo" className="img" />

        {error}

        <TextField
          type="text"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyPress={login}
        />

        <TextField
          type="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          onKeyPress={login}
          className="mar-bottom mar-top"
        />

        <Btn onClick={() => login()} color={Color.Primary} disabled={disabled()}>Login</Btn>
      </div>
    </div>
  );
}
