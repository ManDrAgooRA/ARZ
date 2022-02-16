import { IAdminState } from '@/interfaces';
import { ADMIN_ACTIONS } from '@/user/store/actions';

const initialState: IAdminState = {
  allUsers: [],
  adminModalState: false,
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

    case ADMIN_ACTIONS.CHAGE_ADMIN_MODAL_STATE:
      return {
        ...state,
        adminModalState: action.payload,
      };

    default:
      return state;
  }
}