import { fetchLoginSuccess } from '../actions';
import { getRegistrationData } from '../../BusinessLogic';

export const fetchLogin = ({ requestBody }) => {
  return async (dispatch) => {
    try {
      const { user } = await getRegistrationData({ requestBody });
      dispatch(fetchLoginSuccess(user.userName));
    } catch (error) {
      console.error(error);
    }
  };
};
