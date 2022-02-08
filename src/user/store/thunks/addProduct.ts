import { AppThunk } from '@/interfaces';
import { changeModalState, setErrorMessage } from '@/user/store/actions';
import { addProduct } from '@/admin/api';
import { IRequestBodyAdmin } from '@/admin/interfaces';

export const addNewProduct = ({ requestBody }: IRequestBodyAdmin): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await addProduct({ requestBody });
      if (data.ok) {
        dispatch(setErrorMessage('Product was added'));
        dispatch(changeModalState(true));
      }
    } catch (e: any) {
      dispatch(setErrorMessage(e.message));
      dispatch(changeModalState(true));
    }
  };
};
