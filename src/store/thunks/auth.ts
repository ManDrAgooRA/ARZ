import { fetchSinUpSuccess, fetchLoginSuccess } from '@/store/actions';
import { IAuth } from '@/interfaces';
import { getRegistrationData, getLogin } from '@/BusinessLogic';
import { ErrorHandler } from '@/components/ErrorHandler/ErrorHandler';

export const fetchSignUp = ({
  requestBody,
  handleNavigate,
  handleOpen,
}: IAuth) => {
  return async (dispatch: any) => {
    try {
      const data = await getRegistrationData({ requestBody });
      if (typeof data === 'string') {
        throw Error(data);
      }
      dispatch(fetchSinUpSuccess(data));
      if (Object.keys(data.user).length > 0) {
        handleNavigate('/');
      }
    } catch (e) {
      handleOpen();
    }
  };
};

export const fetchLogin = ({
  requestBody,
  handleNavigate,
  handleOpen,
}: IAuth) => {
  return async (dispatch: any) => {
    try {
      const data = await getLogin({ requestBody });
      if (typeof data === 'string') {
        throw new Error(data);
      }
      dispatch(fetchLoginSuccess(data));
      if (Object.keys(data.user).length > 0) {
        handleNavigate('/');
      }
    } catch (e) {
      handleOpen();
    }
  };
};
