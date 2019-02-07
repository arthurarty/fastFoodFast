import { signUp, loginUser } from '../authActions';
import * as types from '../actionTypes';

describe('auth actions', () => {
  it('Should return a message', () => {
    const text = 'Success';
    const expectedAction = {
      type: types.CREATE_USER,
      message: text,
    };
    expect(signUp(text)).toEqual(expectedAction);
  });
});

describe('login action', () => {
  it('Should return login message', () => {
    const text = 'Success';
    const expectedAction = {
      type: types.LOGIN_USER,
      loginMessage: text,
    };
    expect(loginUser(text)).toEqual(expectedAction);
  });
});
