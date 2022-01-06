import { combineReducers } from 'redux';
import { goods } from './goods';
import { auth } from './auth';
import { cart } from './cart';

export const rootReducer = combineReducers({
  goods,
  auth,
  cart,
});
