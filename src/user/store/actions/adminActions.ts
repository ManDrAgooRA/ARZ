import { IUser } from '@/interfaces';

export const ADMIN_ACTIONS = {
  ALL_USERS_SUCCESS: '[ADMIN] all users success',
  CHAGE_ADMIN_EDIT_MODAL_STATE: '[ADMIN] change admin edit modal state',
  CHAGE_ADMIN_ADD_MODAL_STATE: '[ADMIN] change admin add modal state',
};

export const allUsersSuccess = (users: IUser) => ({
  type: ADMIN_ACTIONS.ALL_USERS_SUCCESS,
  payload: users,
});

export const changeAminEditModalState = (state: boolean) => ({
  type: ADMIN_ACTIONS.CHAGE_ADMIN_EDIT_MODAL_STATE,
  payload: state,
});

export const changeAminAddModalState = (state: boolean) => ({
  type: ADMIN_ACTIONS.CHAGE_ADMIN_ADD_MODAL_STATE,
  payload: state,
});
