import { combineReducers } from 'redux';
import { goods } from './goods';
import { user } from './user';
import { errors } from './errors';

export const rootReducer = combineReducers({
  goods,
  user,
  errors,
});
