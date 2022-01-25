import {
  fetchSinUpSuccess,
  fetchLoginSuccess,
  changeModalState,
} from '@/user/store/actions';
import { IAuth } from '@/interfaces';
import { getRegistrationData, getLogin } from '@/user/businessLogic';

export const fetchSignUp = ({ requestBody, handleNavigate }: IAuth) => {
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
      dispatch(changeModalState(true));
    }
  };
};

export const fetchLogin = ({ requestBody, handleNavigate }: IAuth) => {
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
      dispatch(changeModalState(true));
    }
  };
};
