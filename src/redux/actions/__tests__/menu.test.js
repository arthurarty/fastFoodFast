import { loadMenu, addMenu } from '../menuAction';
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

  it('should return a message', () => {
    const message = { msg: 'Food has been added' };
    const expectedAction = {
      type: types.CREATE_MENU_SUCCESS,
      menuMessage: { msg: 'Food has been added' },
    };
    expect(addMenu(message)).toEqual(expectedAction);
  });
});
