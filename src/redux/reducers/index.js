import { combineReducers } from 'redux';
import message from './authReducer';
import loginMessage from './loginReducer';
import menu from './menuReducer';
import orders from './ordersReducer';

const rootReducer = combineReducers({
  message, loginMessage, menu, orders,
});

export default rootReducer;
