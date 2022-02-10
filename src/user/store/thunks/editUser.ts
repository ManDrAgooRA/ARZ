import { IEditUserRequest } from '@/admin/interfaces';
import { AppThunk } from '@/interfaces';
import { changeModalState, setMessage } from '@/user/store/actions';
import { editUser } from '@/admin/api';

export const editUserData = ({
  id,
  requestBody,
}: IEditUserRequest): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await editUser({ id, requestBody });
      if (data.ok) {
        dispatch(setMessage('User was edited'));
        dispatch(changeModalState(true));
      }
    } catch (e: any) {
      dispatch(setMessage(e.message));
      dispatch(changeModalState(true));
    }
  };
};
