import reducer from '../loginReducer';
import * as types from '../../actions/actionTypes';

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should login user', () => {
    expect(
      reducer([], {
        type: types.LOGIN_USER,
        loginMessage: [
          {
            msg: 'Successful login',
          },
          {
            access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJp',
          },
        ],
      }),
    ).toEqual([
      {
        0: {
          msg: 'Successful login',
        },
        1: {
          access_token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJp',
        },
      },
    ]);
  });
});
