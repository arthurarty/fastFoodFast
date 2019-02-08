import * as types from '../actions/actionTypes';
import initalState from './initalState';

export default function ordersReducer(state = initalState.orders, action) {
  switch (action.type) {
    case types.LOAD_ORDERS_SUCCESS:
      return [...state,
        Object.assign({}, action.orders),
      ];
    default:
      return state;
  }
}
