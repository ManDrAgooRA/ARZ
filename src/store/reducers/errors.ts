import { errorsActions } from '@/store/actions';
import { IErrorState } from '@/interfaces';

const initialState: IErrorState = {
  isOpenModal: false,
  error: '',
};

export function errors(state = initialState, action: any) {
  switch (action.type) {
    case errorsActions.SET_ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };

    case errorsActions.CHANGE_MODAL_STATE:
      return {
        ...state,
        isOpenModal: action.payload,
      };
    default:
      return state;
  }
}
