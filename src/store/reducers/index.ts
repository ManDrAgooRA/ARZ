import { combineReducers } from 'redux';
import { goods } from './goods';
import { auth } from './auth';

export const rootReducer = combineReducers({
  goods,
  auth,
});
