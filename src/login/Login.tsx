import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';

interface IState {
  email: string,
  password: string,
  submitting: boolean,
  message: string,
}

export default function () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const history = useHistory();

  function canSubmit() {
    return (submitting) ? false : email !== '' && password !== '';
  }

  async function login(event: any) {
    if (event && event.type !== 'click' && event.key !== 'Enter') return;
    if (email === '' || password === '') return;

    setSubmitting(true);
    setMessage('');

    let response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    });

    let data = await response.json();

    setSubmitting(false);

    if (!data.token) {
      setMessage(data.message);
    } else {
      history.push('/');
    }
  }

  let error;

  if (message) {
    error = <Alert severity="error">{message}</Alert>
  }

  return (
    <Container maxWidth="xs" component="main" >
      <Box pt={5} pb={1}>
        <Typography component="h1" variant="h5" >
          Sign in
        </Typography>
      </Box>

      {error}

      <Box>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          value={email}
          onChange={event => setEmail(event.target.value)}
          onKeyPress={login}
          disabled={submitting}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          onKeyPress={login}
          disabled={submitting}
        />
      </Box>

      <Box pt={1}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={login}
          disabled={!canSubmit()}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );

}
