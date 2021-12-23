import {
  setErrorMessage,
  fetchSinUpSuccess,
  fetchLoginSuccess,
} from '../actions';
import { getRegistrationData, getLogin } from '../../BusinessLogic';

export const fetchSignUp = ({ requestBody, handleNavigate, handleOpen }) => {
  return async (dispatch) => {
    try {
      const { user } = await getRegistrationData({ requestBody });
      dispatch(fetchSinUpSuccess(user.userName));
      if (Object.keys(user).length > 0) {
        handleNavigate('/');
      }
    } catch (e) {
      dispatch(setErrorMessage('Something went wrong... Please try later'));
      handleOpen();
    }
  };
};

export const fetchLogin = ({ requestBody, handleNavigate, handleOpen }) => {
  return async (dispatch) => {
    try {
      const data = await getLogin({ requestBody });
      if (typeof data === 'string') {
        throw Error(data);
      }
      dispatch(fetchLoginSuccess(data));
      if (Object.keys(data.user).length > 0) {
        handleNavigate('/');
      }
    } catch (e) {
      dispatch(setErrorMessage(e.message));
      handleOpen();
    }
  };
};
