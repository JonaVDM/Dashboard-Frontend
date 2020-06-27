import * as actions from "./types";
import { RootState } from "../reducers";

function setToken(token: string) {
  localStorage.setItem('token', token);
  return {
    type: actions.SET_TOKEN,
    payload: token
  }
};

export function loadToken() {
  const token = localStorage.getItem('token') ?? '';
  return {
    type: actions.SET_TOKEN,
    payload: token
  }
}

function requestLogIn() {
  return {
    type: actions.REQUEST_LOG_IN,
  }
}

function setUser(user: any) {
  return {
    type: actions.SET_USER,
    payload: user,
  }
}

export function login(email: string, password: string) {
  return async function (dispatch: any) {
    dispatch(requestLogIn());
    let response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password })
    });

    let data = await response.json();

    if (data.token) {
      dispatch(setToken(data.token));
      loadUser();
      return { login: true }
    } else {
      return { login: false, message: data.message }
    }
  }
}

export function loadUser() {
  return async function (dispatch: any, getState: () => RootState) {
    const { token } = getState().auth;

    const response = await fetch('/api/me', {
      headers: {
        'x-token': token,
      },
    });

    const data = await response.json();

    if (data.error) {
      console.log('error');
    } else {
      dispatch(setUser(data.user));
    }
  }
}
