import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Favorite } from 'grommet-icons';
import { userFavoritesSelector, userIdSelector } from '@/user/store/selectors';
import { checkFavoriteId } from '@/admin/utlis';
import { edistUserFavoriteList } from '@/user/store/thunks';

export const AddToFavorite: FC<{ id: number }> = ({ id }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(userFavoritesSelector);
  const userId = useSelector(userIdSelector);
  const [isFavorite, setIsFavorite] = useState(
    !!checkFavoriteId({ favoriteList, favoriteId: +id })
  );

  const addToFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    if (!checkFavoriteId({ favoriteList, favoriteId: +id })) {
      dispatch(
        edistUserFavoriteList({
          id: userId || 0,
          requestBody: {
            favorites: [...favoriteList, +id],
          },
        })
      );
    } else {
      const changedList = favoriteList.filter((item: number) => item !== id);
      dispatch(
        edistUserFavoriteList({
          id: userId || 0,
          requestBody: {
            favorites: [...changedList],
          },
        })
      );
    }
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
