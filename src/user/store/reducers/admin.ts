import { IAdminState } from '@/interfaces';
import { ADMIN_ACTIONS } from '@/user/store/actions';

const initialState: IAdminState = {
  allUsers: [],
  adminEditModalState: false,
  adminAddModalState: false,
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

    case ADMIN_ACTIONS.CHAGE_ADMIN_EDIT_MODAL_STATE:
      return {
        ...state,
        adminEditModalState: action.payload,
      };

    case ADMIN_ACTIONS.CHAGE_ADMIN_ADD_MODAL_STATE:
      return {
        ...state,
        adminAddModalState: action.payload,
      };

    default:
      return state;
  }
}
