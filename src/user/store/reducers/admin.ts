import { ADMIN_ACTIONS } from '@/user/store/actions';

const initialState = {
  allUsers: [],
  isAdminLoading: true,
};

export function admin(state = initialState, action: any) {
  switch (action.type) {
    case ADMIN_ACTIONS.ALL_USERS_SUCCESS:
      return {
        ...state,
        allUsers: [...action.payload],
        isAdminLoading: false,
      };

    default:
      return state;
  }
}
