import { combineReducers } from 'redux';
import message from './authReducer';
import loginMessage from './loginReducer';

const rootReducer = combineReducers({
  message, loginMessage,
});

export default rootReducer;
