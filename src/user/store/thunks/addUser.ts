import { getRegistrationData } from '@/user/businessLogic';
import { AppThunk, IUser } from '@/interfaces';
import { changeModalState, setMessage } from '@/user/store/actions';

export const addUser = ({ requestBody }: { requestBody: IUser }): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await getRegistrationData({ requestBody });
      if (typeof data === 'string') {
        throw Error(data);
      }
      dispatch(setMessage('User was added'));
      dispatch(changeModalState(true));
    } catch {
      dispatch(changeModalState(true));
    }
  };
};
