import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import { RootState } from '../redux/reducers';

interface Props {
  requesting: boolean,
  signIn: any
}

function Login({ requesting, signIn }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();

  function canSubmit() {
    return (requesting) ? false : email !== '' && password !== '';
  }

  async function login(event: any) {
    if (event && event.type !== 'click' && event.key !== 'Enter') return;
    if (email === '' || password === '') return;

    setMessage('');

    let data = await signIn(email, password);

    if (!data.login) {
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
          disabled={requesting}
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
          disabled={requesting}
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

function mapState(state: RootState) {
  return {
    requesting: state.auth.requesting,
  }
};

function mapDispatch(dispatch: any) {
  return {
    signIn: async (email: string, password: string) =>
      await dispatch(login(email, password))
  }
}

export default connect(mapState, mapDispatch)(Login);
