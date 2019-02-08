import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function menuReducer(state = initalState.menu, action) {
  switch (action.type) {
    case types.LOAD_MENU_SUCCESS:
      return [...state,
        Object.assign({}, action.menu),
      ];
    case types.CREATE_MENU_SUCCESS:
      return [...state,
        Object.assign({}, action.menuMessage),
      ];
    default:
      return state;
  }
}
