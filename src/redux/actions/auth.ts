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

function requestLogIn(status: boolean) {
  return {
    type: actions.REQUEST_LOG_IN,
    payload: status
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
    dispatch(requestLogIn(true));
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
      dispatch(loadUser());
      return { login: true }
    } else {
      dispatch(requestLogIn(false));
      return { login: false, message: data.message }
    }
  }
}

export function loadUser() {
  return async function (dispatch: any, getState: () => RootState) {
    const { token } = getState().auth;

    if (!token) return;

    const response = await fetch('/api/me', {
      headers: {
        'x-token': token,
      },
    });

    const data = await response.json();

    if (!data.user) {
      // Token is probably expired, remove it.
      dispatch(logout());
    } else {
      dispatch(setUser(data.user));
    }
  }
}

export function logout() {
  localStorage.clear();
  return {
    type: actions.LOG_OUT,
  }
}
