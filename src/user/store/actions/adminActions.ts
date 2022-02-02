import { IUSers } from '@/interfaces';

export const ADMIN_ACTIONS = {
  ALL_USERS_SUCCESS: '[ADMIN] all users success',
};

export const allUsersSuccess = (users: IUSers) => ({
  type: ADMIN_ACTIONS.ALL_USERS_SUCCESS,
  payload: users,
});
