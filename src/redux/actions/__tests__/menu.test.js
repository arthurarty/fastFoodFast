import { loadMenu } from '../menuAction';
import * as types from '../actionTypes';

describe('menu actions', () => {
  it('Should return menu', () => {
    const menu = [
      [
        {
          description: 'pilao rice with gravy',
          menu_id: 1,
          name: 'rice',
          price: 11000,
        },
      ],
    ];
    const expectedAction = {
      type: types.LOAD_MENU_SUCCESS,
      menu,
    };
    expect(loadMenu(menu)).toEqual(expectedAction);
  });
});
