import reducer from '../menuReducer';
import * as types from '../../actions/actionTypes';

describe('menu reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('return menu', () => {
    expect(
      reducer([], {
        type: types.LOAD_MENU_SUCCESS,
        menu: [
          [
            {
              description: 'pilao rice with gravy',
              menu_id: 1,
              name: 'rice',
              price: 11000,
            },
          ],
        ],
      }),
    ).toEqual([
      {
        0: [
          {
            description: 'pilao rice with gravy',
            menu_id: 1,
            name: 'rice',
            price: 11000,
          },
        ],
      },
    ]);
  });

  it('should return menu message', () => {
    expect(
      reducer([], {
        type: types.CREATE_MENU_SUCCESS,
        menuMessage: { msg: 'Food has been added' },
      }),
    ).toEqual([
      { msg: 'Food has been added' },
    ]);
  });
});
