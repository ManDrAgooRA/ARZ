import { allUsersSuccess, changeModalState } from '@/user/store/actions';
import { getAllUser } from '@/admin/businessLogic/getAllUser';

export const allUsers = () => {
  return async (dispatch: any) => {
    try {
      const data = await getAllUser();
      dispatch(allUsersSuccess(data));
    } catch (e) {
      dispatch(changeModalState(true));
    }
  };
};
