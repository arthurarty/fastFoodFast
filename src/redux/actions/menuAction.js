import * as types from './actionTypes';

export function loadMenu(menu) {
  return { type: types.LOAD_MENU_SUCCESS, menu };
}

export function addMenu(menuMessage) {
  return { type: types.CREATE_MENU_SUCCESS, menuMessage };
}
