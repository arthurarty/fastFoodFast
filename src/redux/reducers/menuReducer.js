import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function menuReducer(state = initalState.menu, action) {
  switch (action.type) {
    case types.LOAD_MENU_SUCCESS:
      return [...state,
        Object.assign({}, action.menu),
      ];
    default:
      return state;
  }
}
