import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { TextField, Btn, Color } from '../components/components';

interface Props {
  requesting: boolean,
  signIn: any
}

export default function Login({ requesting, signIn }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function disabled(): boolean {
    if (requesting) return true;
    if (password === '' || email === '') return true;
    return false;
  }

  async function login(event?: any) {
    if (event && event.type !== 'click' && event.key !== 'Enter') return;
    if (email === '' || password === '') return;

    setMessage('');

    let data = await signIn(email, password);

    if (!data.login) {
      setMessage(data.message);
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
          onChange={(event) => setEmail(event.target.value)}
          onKeyPress={login}
        />

        <TextField
          type="password"
          label="Password"
          onChange={(event) => setPassword(event.target.value)}
          onKeyPress={login}
          className="mar-bottom mar-top"
        />

        <Btn onClick={() => login()} color={Color.Primary} disabled={disabled()}>Login</Btn>
      </div>
    </div>
  );
}
