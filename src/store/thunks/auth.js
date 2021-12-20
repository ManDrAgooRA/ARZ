import { fetchLoginSuccess } from '../actions';
import { auth } from '../reducers/auth';

export const fetchLogin = ({ requestBody }) => {
  return async (dispatch) => {
    try {
      const data = await auth({ requestBody });
      dispatch(fetchLoginSuccess(data.requestBody.userName));
    } catch (error) {
      console.error(error);
    }
  };
};
