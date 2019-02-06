import { combineReducers } from 'redux';
import message from './authReducer';

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
