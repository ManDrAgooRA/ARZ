import { AppThunk } from '@/interfaces';
import { changeModalState, setMessage } from '@/user/store/actions';
import { editProduct } from '@/admin/api';
import { IRequestBodyAdmin } from '@/admin/interfaces';

export const editProductData = ({
  id = 0,
  requestBody,
}: IRequestBodyAdmin): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await editProduct({ id, requestBody });
      if (data.ok) {
        dispatch(setMessage('Product was edited'));
        dispatch(changeModalState(true));
      }
    } catch (e: any) {
      dispatch(setMessage(e.message));
      dispatch(changeModalState(true));
    }
  };
};
