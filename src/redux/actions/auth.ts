import * as actions from "./types";

export function setToken(token: string) {
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
      return { login: true }
    } else {
      return { login: false, message: data.message }
    }
  }
}
