import { IUsers } from '@/interfaces';

export const ADMIN_ACTIONS = {
  ALL_USERS_SUCCESS: '[ADMIN] all users success',
};

export const allUsersSuccess = (users: IUsers) => ({
  type: ADMIN_ACTIONS.ALL_USERS_SUCCESS,
  payload: users,
});
