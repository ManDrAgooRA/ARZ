import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Favorite } from 'grommet-icons';
import { userFavoritesSelector, userIdSelector } from '@/user/store/selectors';
import { checkFavoriteId } from '@/admin/utlis';
import { editUserFavoriteList } from '@/user/store/thunks';

export const AddToFavorite: FC<{ id: number }> = ({ id }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(userFavoritesSelector);
  const userId = useSelector(userIdSelector);
  const [isFavorite, setIsFavorite] = useState(
    checkFavoriteId({ favoriteList, favoriteId: +id })
  );

  const addToFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    const changedList = isFavorite
      ? favoriteList.filter((item: number) => item !== id)
      : [...favoriteList, +id];

    dispatch(
      editUserFavoriteList({
        id: userId || 0,
        requestBody: {
          favorites: [...changedList],
        },
      })
    );
    setIsFavorite(!isFavorite);
  };

  return (
    <button type="button" className="btn btn-product-favorite">
      <Favorite
        color="brand"
        onClick={addToFavorite}
        className={
          isFavorite ? 'product-favorite-icon__active' : 'product-favorite-icon'
        }
      />
    </button>
  );
};
