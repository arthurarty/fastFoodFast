import { combineReducers } from 'redux';
import message from './authReducer';
import loginMessage from './loginReducer';
import menu from './menuReducer';

const rootReducer = combineReducers({
  message, loginMessage, menu,
});

export default rootReducer;
