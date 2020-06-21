import React from 'react';
import { Button, Container, TextField, Typography, Box } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

interface IState {
  email: string,
  password: string,
  submitting: boolean,
  message: string,
}

export default class Login extends React.Component<{}, IState> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitting: false,
      message: ''
    }

    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.login = this.login.bind(this);
    this.canSubmit = this.canSubmit.bind(this);
  }

  private changeEmail(event: any) {
    this.setState({ email: event.target.value });
  }

  private changePassword(event: any) {
    this.setState({ password: event.target.value });
  }

  private canSubmit() {
    return (this.state.submitting) ? false : this.state.email !== '' && this.state.password !== '';
  }

  private async login(event: any) {
    if (event && event.type !== 'click' && event.key !== 'Enter') return;
    if (this.state.email === '' || this.state.password === '') return;

    this.setState({
      submitting: true,
      message: ''
    });

    let response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: this.state.email, password: this.state.password })
    });

    let data = await response.json();

    this.setState({
      submitting: false,
    });

    if (!data.token) {
      this.setState({
        message: data.message,
      });
    } else {
      console.log(data.token);
    }
  }

  public render() {
    let error;
    if (this.state.message) {
      error = <Alert severity="error">{this.state.message}</Alert>
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
            value={this.state.email}
            onChange={this.changeEmail}
            onKeyPress={this.login}
            disabled={this.state.submitting}
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
            value={this.state.password}
            onChange={this.changePassword}
            onKeyPress={this.login}
            disabled={this.state.submitting}
          />
        </Box>

        <Box pt={1}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.login}
            disabled={!this.canSubmit()}
          >
            Sign In
          </Button>
        </Box>
      </Container>
    );
  }
}
