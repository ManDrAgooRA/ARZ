import { IUser } from '@/interfaces';

export const ADMIN_ACTIONS = {
  ALL_USERS_SUCCESS: '[ADMIN] all users success',
  CHAGE_ADMIN_MODAL_STATE: '[ADMIN] change admin modal state',
  ADD_NEW_ROLE: '[ADMIN] add new role',
};

export const allUsersSuccess = (users: IUser) => ({
  type: ADMIN_ACTIONS.ALL_USERS_SUCCESS,
  payload: users,
});

export const changeAdminModalState = (isOpen: boolean) => ({
  type: ADMIN_ACTIONS.CHAGE_ADMIN_MODAL_STATE,
  payload: isOpen,
});

export const addNewRole = (role: string) => ({
  type: ADMIN_ACTIONS.ADD_NEW_ROLE,
  payload: role,
});
