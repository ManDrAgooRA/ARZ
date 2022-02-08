import { AppThunk } from '@/interfaces';
import { changeModalState, setErrorMessage } from '@/user/store/actions';
import { getEditProduct } from '@/admin/api';
import { IRequestBodyAdmin } from '@/admin/interfaces';

export const editProduct = ({
  id,
  requestBody,
}: IRequestBodyAdmin): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await getEditProduct({ id, requestBody });
      if (data.ok) {
        dispatch(setErrorMessage('Product was eddet'));
        dispatch(changeModalState(true));
      }
    } catch (e: any) {
      dispatch(setErrorMessage(e.message));
      dispatch(changeModalState(true));
    }
  };
};
