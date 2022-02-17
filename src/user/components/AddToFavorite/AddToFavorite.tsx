import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Favorite } from 'grommet-icons';
import { addToFavoriteList, removeFromFavorite } from '@/user/store/actions';
import { userFavoritesSelector } from '@/user/store/selectors';

const FavoriteFilled = styled(Favorite)`
  path[fill='none'] {
    fill: transparent;
    stroke: 'red';
  }
`;

export const AddToFavorite: FC<{ id: number | string }> = ({ id }) => {
  const dispatch = useDispatch();
  const favoriteList = useSelector(userFavoritesSelector);
  const [isFavorite, setIsFavorite] = useState(false);
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    if (isFavorite) {
      setColor('#7D4CDB');
    } else {
      setColor('transparent');
    }
  }, [isFavorite]);

  const checkFavoriteId = (favoriteId: number) => {
    return favoriteList.some((item: number) => item === favoriteId);
  };

  const addToFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    // if (checkFavoriteId(+id)) {
    //   dispatch(addToFavoriteList(+id));
    //   console.log('work');
    //   console.log(!checkFavoriteId(+id));
    // } else {
    //   dispatch(removeFromFavorite(+id));
    //   // dispatch(addToFavoriteList(+id));
    //   console.log('dont work');
    // }
    if (!checkFavoriteId(+id)) {
      console.log('first');
      dispatch(addToFavoriteList(+id));
    } else {
      console.log('not first');
      dispatch(removeFromFavorite(+id));
      // console.log(checkFavoriteId(+id));
    }
    // console.log(checkFavoriteId(+id));
  };

  // const deleteFromFavorite = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   dispatch(removeFromFavorite(+id));
  // };

  return (
    <button type="button" className="btn btn-product-favorite">
      <FavoriteFilled color="brand" onClick={addToFavorite} />
    </button>
  );
};
