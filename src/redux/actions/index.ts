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
