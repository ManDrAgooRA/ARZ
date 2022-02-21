import { IEditUserRequest, IEditFavoriteList } from '@/admin/interfaces';
import { AppThunk } from '@/interfaces';
import {
  changeModalState,
  setMessage,
  editUser,
  editToFavoriteList,
} from '@/user/store/actions';
import { editUserApi } from '@/admin/api';
import { getFavoriteList } from '@/admin/businessLogic/getFavoriteList';

export const editUserData = ({
  id,
  requestBody,
}: IEditUserRequest): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await editUserApi({ id, requestBody });
      if (data.ok) {
        dispatch(setMessage('User was edited'));
        dispatch(editUser(requestBody));
        dispatch(changeModalState(true));
      } else {
        throw new Error('Email already exists');
      }
    } catch (e: any) {
      dispatch(setMessage(e.message));
      dispatch(changeModalState(true));
    }
  };
};

export const edistUserFavoriteList = ({
  id,
  requestBody,
}: IEditFavoriteList): AppThunk => {
  return async (dispatch) => {
    try {
      const data = await getFavoriteList({ id, requestBody });
      dispatch(editToFavoriteList(data.favorites));
    } catch {
      dispatch(changeModalState(true));
    }
  };
};
