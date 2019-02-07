import * as types from './actionTypes';

export function signUp(message) {
  return { type: types.CREATE_USER, message };
}

export function loginUser(loginMessage) {
  return { type: types.LOGIN_USER, loginMessage };
}
