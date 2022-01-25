import { combineReducers } from 'redux';
import { goods } from './goods';
import { auth } from './auth';
import { errors } from './errors';

export const rootReducer = combineReducers({
  goods,
  auth,
  errors,
});
