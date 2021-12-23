import { setErrorMessage, fetchSinUpSuccess } from '../actions';
import { getRegistrationData } from '../../BusinessLogic';

export const fetchSignUp = ({ requestBody, handleNavigate, handleOpen }) => {
  return async (dispatch) => {
    try {
      const { user } = await getRegistrationData({ requestBody });
      dispatch(fetchSinUpSuccess(user.userName));
      if (Object.keys(user).length > 0) {
        handleNavigate('/');
      }
    } catch (err) {
      dispatch(setErrorMessage('Something went wrong... Please try later'));
      handleOpen();
    }
  };
};
